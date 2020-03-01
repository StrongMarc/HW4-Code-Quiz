// start button to start quiz
var startBtn = document.querySelector("#start");

// Generate quiz by selecting button to view the first question
startBtn.onclick = function() {
    newPage()
}

function newPage() {
    window.location.assign("./02-Homework/Assets/Question1.html")
}

// Add timer to countdown for score
var timeLeft = 35
localStorage.setItem('score', timeLeft)
var timerEl = document.getElementById("score");
function timer() {
    var timeInterval = setInterval(function() {
      timerEl.textContent = "Time: " + timeLeft;
      localStorage.setItem('score', timeLeft)
      if (timeLeft === 0) {
        // speedRead();
        clearInterval(timeInterval);
      }
      timeLeft--;
    }, 1000);
}

// question 1 correct answer
// first way addEventListener
document.getElementById("true1").addEventListener("click", newPage1);
// var answer = Boolean;
// addEventListener with additional instructions
// document.getElementById("true1").addEventListener("click", function (){
//     newPage1()
//     answer = true;
// }

function newPage1() {
    window.location.assign("./Question2.html")
    
    // document.write("Correct!");
    // var tag = document.createElement("p");
    // tag.textContent = "Correct!";
    // document.body.appendChild(tag);
    // console.log(tag)
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
