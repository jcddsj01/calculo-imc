$(document).ready(function() {
    $("#altura").mask("#,##");
    $("#peso").mask("##,##");
});

function CalcularIMC() {
    let altura = document.getElementById("altura").value.replace(',', '.');
    let peso = document.getElementById("peso").value.replace(',', '.');
    let imc = peso / (altura ** 2)
    
    if (imc < 18.5) {
        document.getElementById("imc-magreza").style.color = '#ff5202';
        document.getElementById("imc-magreza").style.fontWeight = 'bolder';
    } else if (imc < 25) {
        document.getElementById("imc-normal").style.color = '#ff5202';
        document.getElementById("imc-normal").style.fontWeight = 'bolder';
    } else if (imc < 30) {
        document.getElementById("imc-sobrepeso").style.color = '#ff5202';
        document.getElementById("imc-sobrepeso").style.fontWeight = 'bolder';
    } else if (imc < 40) {
        document.getElementById("imc-obesidade").style.color = '#ff5202';
        document.getElementById("imc-obesidade").style.fontWeight = 'bolder';
    } else {
        document.getElementById("imc-obesidade-grave").style.color = '#ff5202';
        document.getElementById("imc-obesidade-grave").style.fontWeight = 'bolder';
    }

    document.getElementById("resultado").innerText = imc.toFixed(2).replace(".", ",");
}

function Limpar() {
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("resultado").innerHTML = "SEU IMC.: ";
    document.getElementById("imc-magreza").style.color = '#000';
    document.getElementById("imc-normal").style.color = '#000';
    document.getElementById("imc-sobrepeso").style.color = '#000';
    document.getElementById("imc-obesidade").style.color = '#000';
    document.getElementById("imc-obesidade-grave").style.color = '#000';
    document.getElementById("imc-magreza").style.fontWeight = 'normal';
    document.getElementById("imc-normal").style.fontWeight = 'normal';
    document.getElementById("imc-sobrepeso").style.fontWeight = 'normal';
    document.getElementById("imc-obesidade").style.fontWeight = 'normal';
    document.getElementById("imc-obesidade-grave").style.fontWeight = 'normal';
}