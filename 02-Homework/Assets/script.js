// start button to start quiz
var startBtn = document.querySelector("#start");

// Generate quiz by selecting button to view the first question
startBtn.onclick = function() {
    newPage()
}

function newPage() {
    window.location.assign("./02-Homework/Assets/Question1.html")
}

var timeLeft = 6
var timerEl = document.getElementById("score");
function timer() {
    var timeInterval = setInterval(function() {
      timerEl.textContent = "Time: " + timeLeft;
      if (timeLeft === 0) {
        // speedRead();
        clearInterval(timeInterval);
      }
      timeLeft--;
    }, 1000);


// question 1 correct answer
var q1 = document.getElementById("true1").addEventListener("click", newPage1);

function newPage1() {
    window.location.assign("./Question2.html")
    time2 = timeleft;
    console.log(time2)
    // document.write("Correct!");
    // var tag = document.createElement("p");
    // tag.textContent = "Correct!";
    // document.body.appendChild(tag);
    // console.log(tag)
}
console.log(q1)
document.getElementById("result1").innerHTML = "Correct!";
}
timer()