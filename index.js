window.onload = function() {

    var player = {
        left: 450,
        top: 470
    }

    var missiles = []

    var enemies = [
        {
            left: 350, top: 100
        },
        {
            left: 450, top: 200
        },
        {
            left: 550, top: 100
        },
        {
            left: 650, top: 200
        },
        {
            left: 250, top: 200
        },
        {
            left: 150, top: 150
        }
    ]

    function drawPlayer() {
        content = "<div class='player' style='left:" + player.left +"px; top:"+ player.top +"px'></div>"

        document.getElementById("players").innerHTML = content;
    }

    // enemy functionality

    function drawEnemies() {
        content = "";

        for(var i = 0; i < enemies.length; i++){
            content += "<div class='enemy' style='left:" + enemies[i].left +"px; top:"+ enemies[i].top +"px'></div>"
        }
        document.getElementById("enemies").innerHTML = content;
    }

    function moveEnemies() {
        for(var i = 0; i < enemies.length; i++){
            
            enemies[i].top = enemies[i].top + 1;
        }
    }

    // missile functionality

    function drawMissiles() {
        content = "";
        
        for(var i = 0; i < missiles.length; i++){
            console.log("missiles");

            content += "<div class='missile' style='left:" + missiles[i].left +"px; top:"+ missiles[i].top +"px'></div>"
        }
        document.getElementById("missiles").innerHTML = content;
    }

    function moveMissiles() {
        for(var i = 0; i < missiles.length; i++){
            missiles[i].top = missiles[i].top - 4;
        }
    }


    document.onkeydown = function(e){
        if(e.keyCode == 37 && player.left > 0) { //left
            player.left = player.left - 10;
        } else if(e.keyCode == 39 && player.left < 830) { //right
            player.left = player.left + 10;
        } else if(e.keyCode == 38 && player.top > 500) { //up
            player.top = player.top - 10;
        } else if(e.keyCode == 40 && player.top < 625) { //down
            player.top = player.top + 10;
        } else if(e.keyCode == 32){ //fire missile
            missiles.push({left: player.left + 34, top: player.top-12});
            drawMissiles();
        }
        drawPlayer();
    }

    function gameLoop(){
        drawPlayer();
        drawEnemies();
        moveEnemies(); 
        moveMissiles();
        drawMissiles();
        setTimeout(gameLoop, 10);     
    }
    gameLoop();

}