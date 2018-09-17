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
            $("#info-box").appendTo(userPlayer.Name+ " vs ");
            $(".card-text").append("<br>" + "Health: " + userPlayer.Health + "<br>");
            $(".card-text").append("Attack: " + userPlayer.Attack + "<br>");
            $(".card-text").append("Counter: " + userPlayer.Counter + "<br>");
            $(".text-center").text("Select an opponent to attack");
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
        };

    });

});