var timeLeft = localStorage.getItem('score')
var timerEl = document.getElementById("score");
timerEl.textContent = "Time: " + timeLeft;
console.log(timeLeft)
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
// document.getElementById("true1").addEventListener("click", newPage1);

// function newPage1() {
//     window.location.assign("./Question2.html")
    // time2 = timeleft;
    // console.log(time2)
    // document.write("Correct!");
    // var tag = document.createElement("p");
    // tag.textContent = "Correct!";
    // document.body.appendChild(tag);
    // console.log(tag)
// }

// var element = document.querySelector("#result1");
// element.onload = function() {
//     checkCookies()
// }
// function checkCookies(){
//     var x = document.getElementById("result1")
//     x.innerHTML = "Correct!";

// }

// document.getElementsByTagName("p")[0].addEventListener("onload", change);
// function change(event){
//     document.getElementsByTagName("p")[0].innerHTML = "YOU CLICKED ME!"
//     console.log(event)
// }

timer()