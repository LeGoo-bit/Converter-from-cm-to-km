

document.getElementById("convert").onclick = function () {
    var num = document.getElementById("number").value ;

    var km = num/100000;

    document.getElementById("result").innerHTML ="Your result is <br> "+" Kilometer :  "+km+"KM";
}