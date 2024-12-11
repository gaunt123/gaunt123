var x="X"
var o="O"
counter=2;
var winO=false;
var winX=false;
var pole=["","","","","","","","",""];
var winningcombX=[["0X", "1X", "2X"],["3X", "4X", "5X"],["6X", "7X", "8X"],["0X", "3X", "6X"],["1X", "4X", "7X"],["2X", "5X", "8X"],["0X","4X","8X"],["2X","4X","6X"]];
var winningcombO=[["0O", "1O", "2O"],["3O", "4O", "5O"],["6O", "7O", "8O"],["0O", "3O", "6O"],["1O", "4O", "7O"],["2O", "5O", "8O"],["0O","4O","8O"],["2O","4O","6O"]];
function onFclick(el){
    if(winX==false && winO==false) {
        var val = el.name;
        if (el.innerHTML == "") {
            if (counter % 2 == 0) {
                el.innerHTML = x;
                pole[val] = val + x;

            } else {
                el.innerHTML = o;
                pole[val] = val + o;
            }
        }
        console.log(pole)
        counter++;
        checkwinX();
        checkwinO();
        return counter;
        return pole;
    }
    else{
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        if (winX==true){
            alert("X win")
        }
        else{
            alert("O win")
        }
    }
}

function checkwinX(){
    for (var i = 0; i < winningcombX.length; i++) {
        var winCondition = winningcombX[i];
        // Проверяем, находятся ли все элементы выигрышной комбинации в массиве pole
        if (winCondition.every(elem => pole.includes(elem))) {
            console.log("win X");
            winX=true;
            break;
        }
    }
    return winX;
}
function checkwinO(){
    for (var i = 0; i < winningcombO.length; i++) {
        var winCondition = winningcombO[i];
        // Проверяем, находятся ли все элементы выигрышной комбинации в массиве pole
        if (winCondition.every(elem => pole.includes(elem))) {
            console.log("win O");
            winO=true;
            break;
        }
    }
    return winO;
}
function onRclick(el){
    winX=false;
    winO=false;
    document.getElementById("0").disabled = false;
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.getElementById("0").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    pole=["","","","","","","","",""];
    return pole;
}
