var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

var scoreDisplay = document.getElementById("score");

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
    scoreDisplay.textContent = "Score: " + counter; // Update the score display
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("restart");
        character.style.top = 100 + "px";
        counter=0;
        scoreDisplay.textContent = "Score: 0"; // Reset the score display
    }
},10);

function jump(){
    if (jumping === 0) {
        jumping = 1;
        let jumpCount = 0;
        var jumpInterval = setInterval(function(){
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if((characterTop>6)&&(jumpCount<15)){
                character.style.top = (characterTop-5)+"px";
            }
            if(jumpCount>20){
                clearInterval(jumpInterval);
                jumping=0;
                jumpCount=0;
            }
            jumpCount++;
        },10);
    }
}
