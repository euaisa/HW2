document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("averagebtn").addEventListener("click", function () {
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
let num3 = parseFloat(document.getElementById("num3").value);

        document.getElementById("result").innerHTML = (num1 + num2 + num3)/3;
    });
});

