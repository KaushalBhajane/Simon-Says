let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
   if (started == false) {
      console.log("The game has started");
      started = true;
      levelUp();
   }
})

let allBtn = document.querySelectorAll(".btn");
   for(btn of allBtn) {
      btn.addEventListener("click", btnPress);
   }

function levelUp() {
   userSeq = [];
   level++;
   h3.innerText = `Level ${level}`;
   let randIdx = Math.floor(Math.random() * btns.length);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randBtn);

}

function gameFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
      btn.classList.remove("flash");
   }, 250);
}
function userFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
      btn.classList.remove("flash");
   }, 250);
}

function btnPress() {
   let btn = this;
   userFlash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userColor);
   
   checkSeq(userSeq.length-1);
}
function checkSeq(idx) {
   if(userSeq[idx] === gameSeq[idx]) {
      if(userSeq.length == gameSeq.length) {
         setTimeout(levelUp, 1000);
      }
   }
   else {
      h3.innerHTML = `Game Over !<br>Your Score is <b>${level}</b> <br>Restart the Game`;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function() {
         document.querySelector("body").style.backgroundColor = "white"
      }, 150);
      resetGame();
   }
   
}

function resetGame() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}


