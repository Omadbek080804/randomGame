"use strict";
let body = document.body;
let startGameBtn = document.getElementById("start-game-btn");
let randomConteiner = document.querySelector(".random-conteiner")
let randomForm = document.getElementById("random-form")
let randomText = document.getElementById("random-text")
let natijaText = document.getElementById("Natija-text")
let attemps = document.querySelector(".attemps")





// start btn
let completeAudio = new Audio("./lose.wav")
let startAudio = new Audio("./comlete.wav")
startGameBtn.addEventListener("click", function () {

     randomConteiner.classList.toggle("show-modal")
     startAudio.play()
})

function restartGame(){
     randomConteiner.classList.toggle("show-modal")
     startAudio.play()
}

function find_random_number(firstNum, secondNum) {
     return Math.round(Math.random() * (secondNum - firstNum) + Number(firstNum))

}


// random form sumbit
let attemps_count = 3;
randomForm.addEventListener("submit", function (event) {
     event.preventDefault();
     let first = randomForm.first_number.value;
     let second = randomForm.second_number.value;
     let guess = randomForm.guess_number.value;
     if (Number(first) > Number(second) || Number(first)===Number(second)) {
          alert("raqamlarni togri kiriting");
          return;
     }


     let randomNum = find_random_number(first, second);
     randomText.textContent = randomNum;
     if (randomNum === Number(guess)) {
          natijaText.textContent = "siz yutdingiz"
          startAudio.play()
          restartGame()
     }
     else {
          attemps_count--;
          if (attemps_count === -1) {
               natijaText.textContent = "siz yutqazdingiz"
               randomConteiner.classList.remove("show-modal")
     startGameBtn.textContent = "Restart game"

               return;
          }
          attemps.textContent = attemps_count
          attemps.classList.add("attemps-blur")
          setTimeout(() => {
               attemps.classList.remove("attemps-blur")
          }, 500)
          completeAudio.play()
          startGameBtn.textContent = "Restart game"


     }
     console.log(randomNum)
})