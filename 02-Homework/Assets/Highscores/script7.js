var timeLeft = localStorage.getItem('score')
var timerEl = document.getElementById("score");
var y = localStorage.getItem('myJSON')
alert(y)
obj = JSON.parse(y);
timerEl.textContent = "       ";

var finalEl = document.getElementById("final");
finalEl.textContent = obj.x + "," + obj.timeLeft;

document.getElementById("back").addEventListener("click", function() {
    backPage()
})

document.getElementById("clear").addEventListener("click", function() {
    x = ""
    timeLeft = ""
    obj = {x , timeLeft }
    finalEl.textContent = obj.x + "," + obj.timeLeft;
})

// function to go to question2.html
function backPage() {
    window.location.assign("../allDone/allDone.html")
}