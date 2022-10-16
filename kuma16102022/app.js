var circle = document.getElementById("informatiton__circle");
var upBtn = document.getElementById("control__upButton");
var downBtn = document.getElementById("control__downButton");

var rotateValue = circle.style.transform;
// console.log(rotateValue);

var rotateSum;

upBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
};

downBtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
};