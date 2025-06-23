let curmole = 0 ; 
let plantt = 0 ; 
let score = 0 ; 
let gameover = false ; 

window.onload = function(){
    setGame(); 
}
function setGame(){
    for (let i = 0 ; i <9 ; i++){
        title = document.createElement("div");
        title.id = i.toString(); 
        title.addEventListener("click", selectTile);
document.getElementById("board").appendChild(title);
    }
}
  function getRandom (){
    let num = Math.floor(Math.random() * 9);
    return num.toString(); 

  }
function setMole(){
    if(gameover){
        return; 
    }
    if(curmole){
        curmole.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "monty-mole (1).png";
    let num = getRandom(); 
    if (curmole&&curmole.id==num){
        return; 
    }
    curmole = document.getElementById(num);
    curmole.appendChild(mole);
}

setInterval(setMole, 1000);
setInterval(plant, 2000);


function plant(){
    if(gameover){
        return; 
    }
    if(plantt){
        plantt.innerHTML = "";
    }
    let pplant = document.createElement("img");
    pplant.src= "piranha-plant.png"; 
    let num= getRandom();
    if (plantt&&plantt.id==num){
        return; 
    }
    plantt = document.getElementById(num);
    plantt.appendChild(pplant);
}

// function selectTile(){
//     if(gameover){
//         return; 
//     }
//     if(this == curmole){
//          score = score+10; 
//          document.getElementById("score").innerHTML = score;
//     }
//      else if(this == plantt){
//         document.getElementById("score").innerHTML = "GAMEOVER:" +score;
//         gameover = true;
//    }


// }

function selectTile(){
    if (gameover) return;

    const scoreEl = document.getElementById("score");

    if (this === curmole) {
        // Hit a mole
        score += 10;
        scoreEl.innerHTML = score;
        // ← tell the arcade wrapper
        window.parent.postMessage(
          { type: "moleHit", score },
          "*"
        );
    }
    else if (this === plantt) {
        // Hit a plant → game over
        gameover = true;
        scoreEl.innerHTML = "GAMEOVER:" + score;
        // ← tell the arcade wrapper
        window.parent.postMessage(
          { type: "plantHit", score },
          "*"
        );
    }
}

