var timeLeft = localStorage.getItem('score')
var timerEl = document.getElementById("score");
timerEl.textContent = "Time: " + timeLeft;

var finalEl = document.getElementById("final");
finalEl.textContent = "Your final score is " + timeLeft +".";
