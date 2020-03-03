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
entry = '';
function myFunction() {
    // document.getElementById("myForm").addEventListener("onkeydown", function() {
    //         var characters = '';
    //         if (lowercase) {
    //           characters += 'abcdefghijklmnopqrstuvwxyz';
    //           console.log(characters);
    //         }
    // })
    // var x = document.getElementById("myForm") 
    // alert($(this).val())
    // // alert(y);
    // console.log(x)
    // document.getElementById("demo").innerHTML = x;
}

var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);

var value = ["aa", timeLeft]
localStorage.setItem("testKey", JSON.stringify(value));
var test = JSON.parse(localStorage.getItem("testKey"));
alert(test);