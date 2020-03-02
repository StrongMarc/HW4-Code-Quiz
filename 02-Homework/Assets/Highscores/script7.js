var timeLeft = localStorage.getItem('score')
var timerEl = document.getElementById("score");
timerEl.textContent = "       ";

var finalEl = document.getElementById("final");
finalEl.textContent = "Your final score is " + timeLeft +".";

document.getElementById("back").addEventListener("click", function() {
    backPage()
})

// function to go to question2.html
function backPage() {
    window.location.assign("../allDone/allDone.html")
}