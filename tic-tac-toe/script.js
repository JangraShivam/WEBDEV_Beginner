const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info")
const newGameBtn = document.querySelector(".btn");

let currentMark;
let winner;
let boxchecked;



function start(){
    newGameBtn.classList.remove("active");
    currentMark = 'X';
    winner = null;
    boxchecked = 0;

    gameInfo.innerText = "Current Player : "+ currentMark;
    
    boxes.forEach(box => {
        box.innerText = "";
        box.classList.remove("win");
    });
}

function addMark(event) {
    let box = event.target; 

    if (winner == null && box.innerText === '') {
        box.innerText = currentMark;
        currentMark = currentMark === 'X' ? 'O' : 'X'; 
        boxchecked++;
        
    }

    winner = gameresult();
    
    if(winner != null){
        gameInfo.innerText = "Winner Player : " + winner;
        newGameBtn.classList.add("active");
        return;
    }
    if(boxchecked == 9){
        gameInfo.innerText = "Game Tied";
        newGameBtn.classList.add("active");
        return;
    }

    gameInfo.innerText = "Current Player : " + currentMark;

}

function gameresult(){
    
    if(box1.innerText != ''){
        let Mark = box1.innerText;
        
        if(box2.innerText == Mark && box3.innerText == Mark){
            box1.classList.add("win");
            box2.classList.add("win");
            box3.classList.add("win");
            return Mark;
        }
        if(box4.innerText == Mark && box7.innerText == Mark){
            box1.classList.add("win");
            box4.classList.add("win");
            box7.classList.add("win");
            return Mark;
        }
        if(box5.innerText == Mark && box9.innerText == Mark){
            box1.classList.add("win");
            box5.classList.add("win");
            box9.classList.add("win");
            return Mark;
        }
        
        
    }

    if(box4.innerText != ''){
        let Mark = box4.innerText;

        if(box5.innerText == Mark && box6.innerText == Mark){
            box4.classList.add("win");
            box5.classList.add("win");
            box6.classList.add("win");
            return Mark;
        }
        
    }

    if(box7.innerText != ''){
        let Mark = box7.innerText;

        if(box8.innerText == Mark && box9.innerText == Mark){
            box7.classList.add("win");
            box8.classList.add("win");
            box9.classList.add("win");
            return Mark;
        }
        if(box5.innerText == Mark && box3.innerText == Mark){
            box7.classList.add("win");
            box5.classList.add("win");
            box3.classList.add("win");
            return Mark;
        }
    }

    if(box2.innerText != ''){
        let Mark = box2.innerText;

        if(box5.innerText == Mark && box8.innerText == Mark){
            box2.classList.add("win");
            box5.classList.add("win");
            box8.classList.add("win");
            return Mark;
        }

        
    }

    if(box3.innerText != ''){
        let Mark = box3.innerText;

        if(box6.innerText == Mark && box9.innerText == Mark){
            box3.classList.add("win");
            box6.classList.add("win");
            box9.classList.add("win");
            return Mark;
        }

        
    }

    return null;

}

boxes.forEach(box => box.addEventListener('click', addMark));

newGameBtn.addEventListener("click",start);

start();


