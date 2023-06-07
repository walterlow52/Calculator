result = false;
for (var i = 0; i < document.querySelectorAll(".numbers").length; i++) {
  number[i].addEventListener("click", function(e) {
    var currentString = document.getElementById("input").innerHTML;
    var last_ch = currentString[currentString.length-1];
    if (result === false) {
      document.getElementById("input").innerHTML += e.target.innerHTML;
    }
    else if (result === true && last_ch === "+" || last_ch === "-" || last_ch === "x" || last_ch === "/") {
      result = false;
      document.getElementById("input").innerHTML += e.target.innerHTML;
    }
    else {
      result = false;
      document.getElementById("input").innerHTML = "";
      document.getElementById("input").innerHTML += e.target.innerHTML;
    }
  });
}

for (var i = 0; i < document.querySelectorAll(".operators").length; i++) {
  document.querySelectorAll(".operators")[i].addEventListener("click", function(e) {
    var currentString = document.getElementById("input").innerHTML;
    var last_ch = currentString[currentString.length-1];
    if (last_ch === "+" || last_ch === "-" || last_ch === "x" || last_ch === "/") {
      var newString = currentString.substring(0, currentString.length-1) + e.target.innerHTML;
      document.getElementById("input").innerHTML = newString;
    }
    else if (currentString.length == 0) {
      console.log("Enter a number"); 
    }
    else {
      document.getElementById("input").innerHTML += e.target.innerHTML;
    }
  });
}
document.getElementById('result').addEventListener("click", function() {
  var inputString = document.getElementById("input").innerHTML;
  var nums = inputString.split(/\+|\-|\x|\//g);
  var operators = inputString.replace(/[0-9]|\./g, "").split("");
  console.log(inputString);
  console.log(operators);
  console.log(nums);
  console.log("------------------------------------------------------------------------------------------");
});
