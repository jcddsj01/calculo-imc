$(document).ready(function() {
    $("#altura").mask("#,##");
    $("#peso").mask("##,##");
});

function CalcularIMC() {
    let altura = document.getElementById("altura").value.replace(',', '.');
    let peso = document.getElementById("peso").value.replace(',', '.');
    let imc = peso / (altura ** 2)

    if (imc < 18.5) {
        document.getElementById("imc-magreza").style.backgroundColor = '#ff52028c';
    } else if (imc < 25) {
        document.getElementById("imc-normal").style.backgroundColor = '#ff52028c';
    } else if (imc < 30) {
        document.getElementById("imc-sobrepeso").style.backgroundColor = '#ff52028c';
    } else if (imc < 40) {
        document.getElementById("imc-obesidade").style.backgroundColor = '#ff52028c';
    } else {
        document.getElementById("imc-obesidade-grave").style.backgroundColor = '#ff52028c';
    }

    document.getElementById("resultado").innerText = imc.toFixed(2).replace(".", ",");
}

function Limpar() {
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("resultado").innerHTML = "SEU IMC.: ";
    document.getElementById("imc-magreza").style.backgroundColor = '#fff';
    document.getElementById("imc-normal").style.backgroundColor = '#fff';
    document.getElementById("imc-sobrepeso").style.backgroundColor = '#fff';
    document.getElementById("imc-obesidade").style.backgroundColor = '#fff';
    document.getElementById("imc-obesidade-grave").style.backgroundColor = '#fff';
} 
