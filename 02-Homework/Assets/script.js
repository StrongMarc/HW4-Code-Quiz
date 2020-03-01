// start button to start quiz
var startBtn = document.querySelector("#start");

// Generate quiz by selecting button to view the first question
startBtn.onclick = function() {
    newPage()
}

function newPage() {
    window.location.assign("./02-Homework/Assets/Question1.html")
  }