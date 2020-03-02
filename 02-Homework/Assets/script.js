// start button to start quiz
var startBtn = document.querySelector("#start");

// Generate quiz by selecting button to view the first question
startBtn.onclick = function() {
    newPage();
}

function newPage() {
    window.location.assign("./02-Homework/Assets/Question1.html")
}

// Add timer to countdown for score
var timeLeft = 75
localStorage.setItem('score', timeLeft)
var timerEl = document.getElementById("score");
function timer() {
    var timeInterval = setInterval(function() {
      timerEl.textContent = "Time: " + timeLeft;
      localStorage.setItem('score', timeLeft)
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
      timeLeft--;
    }, 1000);
}

// question 1 correct answer
// first way addEventListener
// document.getElementById("true1").addEventListener("click", newPage1);
var answer = false;
localStorage.setItem('answer', answer)

// addEventListener with additional instructions
document.getElementById("true1").addEventListener("click", function() {
    answer = true,
    localStorage.setItem('answer', answer)
    newPage1()
})

// question 1 wrong answer
document.getElementById("wrong1").addEventListener("click", function() {
    timeLeft -= 14
    localStorage.setItem('score', timeLeft)
    newPage1()
})
document.getElementById("wrong2").addEventListener("click", function() {
    timeLeft -= 14
    localStorage.setItem('score', timeLeft)
    newPage1()
})
document.getElementById("start").addEventListener("click", function() {
    timeLeft -= 14
    localStorage.setItem('score', timeLeft)
    newPage1()
})

// function to go to question2.html
function newPage1() {
    window.location.assign("./Question2/Question2.html")
}

// var element = document.querySelector("#result1");
// element.onload = function() {
//     checkCookies()
// }
// function checkCookies(){
//     var x = document.getElementById("result1")
//     x.innerHTML = "Correct!";

// }


timer()
