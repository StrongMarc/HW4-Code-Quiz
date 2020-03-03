var timeLeft = localStorage.getItem('score')
var timerEl = document.getElementById("score");
timerEl.textContent = "Time: " + timeLeft;

var finalEl = document.getElementById("final");
finalEl.textContent = "Your final score is " + timeLeft +".";


// displays the result of the answer
var result = localStorage.getItem('answer')
var displayResult = document.getElementById("result1");

if (result == "true") {   
    displayResult.innerHTML = "Correct!";
}
else {
    displayResult.innerHTML = "Wrong!";
}

var value = ["aa", timeLeft]
localStorage.setItem("testKey", JSON.stringify(value));
var test = JSON.parse(localStorage.getItem("testKey"));
alert(test);