// To load js file after page loads
$(document).ready(function(){

    // Champion Stats
    var leblanc = {
            Name: "LeBlanc",
            Health: 120,
            Attack: 4,
            Counter: 12
        };

    var orianna = {
            Name: "Orianna",
            Health: 100,
            Attack: 10,
            Counter: 5
        };

    var ahri = {
            Name: "Ahri",
            Health: 150,
            Attack: 3,
            Counter: 14
        };

    var syndra = {
            Name: "Syndra",
            Health: 180,
            Attack: 2,
            Counter: 17
        };

    // Global Variables
    var opponentsDefeated = 0;
    var playerChosen = false;
    var opponentChosen = false;
    var userPlayer;
    var currentOpponent;
    var startingValue;
    var userImage;
    var opponentImage;

    // Resetting Game
    function reset(){
        opponentsDefeated = 0;
        playerChosen = false;
        opponentChosen = false;
        userPlayer;
        currentOpponent;
        startingValue;
        $("#adversary-box").empty();
        $("#player-box").empty();
        $("#info-box").empty();
        $("#opponents-box").empty();
    };
    
    // Game Started
    $(".champion").on('click', function (){
        if (playerChosen === false && opponentChosen === false){
    // Moves selected champion to "Your Champion" and groups remaining champions under "Defender"
            $(this).appendTo('#player-box').removeClass('opponents').addClass('player');
            $('.opponents').appendTo('#opponents-box');
            playerChosen = true;
            userImage = (this);
    
    // Assigns selected champion as userPlayer
            if ($(this).hasClass("Leblanc"))
            {
                userPlayer = leblanc;
            };
            if($(this).hasClass("Orianna"))
            {
                userPlayer = orianna;
            };
            if($(this).hasClass("Ahri"))
            {
                userPlayer = ahri;
            };
            if($(this).hasClass("Syndra"))
            {
                userPlayer = syndra;
            };
    // Adds player info
            $("#info-box").html(userPlayer.Name+ " vs ");
            $("#player-box").append(userPlayer.Name);
            $("#player-box").append("<br>" + "Health: " + userPlayer.Health + "<br>");
            $("#player-box").append("Attack: " + userPlayer.Attack + "<br>");
            $("#player-box").append("Counter: " + userPlayer.Counter + "<br>");
            $("#notifications").text("Select an opponent to attack");
            startingValue = userPlayer.Attack;

        }
        else if (playerChosen === true && opponentChosen === false){
            $(this).appendTo("#adversary-box")
            opponentChosen = true;
            opponentImage = (this);
            if ($(this).hasClass("Leblanc"))
            {
                currentOpponent = leblanc;
            };
            if ($(this).hasClass("Orianna"))
            {
                currentOpponent = orianna;
            };
            if ($(this).hasClass("Ahri"))
            {
                currentOpponent = ahri;
            };
            if ($(this).hasClass("Syndra"))
            {
                currentOpponent = syndra;
            };

            $("#info-box").html(userPlayer.Name + " vs " + currentOpponent.Name);
            $("#adversary-box").append("<br>" + "Health: " + currentOpponent.Health + "<br>");
            $("#adversary-box").append("Attack: " + currentOpponent.Attack + "<br>");
            $("#adversary-box").append("Counter: " + currentOpponent.Counter + "<br>");
            $("#notifications").text("");
        };

    });

    // Using the attack button
    $(".attack-button").on('click', function (){
        if (currentOpponent.Health > 0) {
            // Explaining to user what happened
            $('#notifications').text("You attacked " + currentOpponent.Name + " for " + userPlayer.Attack +
                " damage. She counterattacked for " + currentOpponent.Counter + " damage.");
            
            // Code to do damage to opponent and take damage viva "Counter"
            currentOpponent.Health = currentOpponent.Health - userPlayer.Attack;
            userPlayer.Health = userPlayer.Health - currentOpponent.Counter;
            userPlayer.Attack = userPlayer.Attack + startingValue;
            
            console.log (currentOpponent.Health);
            console.log (userPlayer.Health);
            console.log ($("#player-info"));

            // Changing health values of selected champion and opponent
            $("#player-info").text("<br>" + "Health: " + userPlayer.Health + "<br>");
            // $("#player-info").append("Attack: " + userPlayer.Attack + "<br>");
            // $("#player-info") .append("Counter: " + userPlayer.Counter + "<br>");

            // $("#player-info").empty();

            // Check if opponent has been defeated
            if (currentOpponent.Health <= 0) {
                $("#notifications").text("You have defeated " + currentOpponent.Name 
                    + "! Pick another opponent to continue!");
                opponentsDefeated = opponentsDefeated + 1;
                opponentChosen = false;
                $("#adversary-box").empty();
            }

            // Check to see if all opponents have been defeated
            if (opponentsDefeated === 3) {
                $("#notifications").text("Congratulations! You Win!");
                $("#info-box").text("");
                $(".champion").animate({height: '500px'});
            }

            // Check to see if user has been defeated
            if (userPlayer.Health <= 0){
                $("#notifications").text("You have been defeated, better luck next time!");
                reset();
            }
        }
    });

    $(".reset-button").on('click', function (){
        location.reload();
    });


});