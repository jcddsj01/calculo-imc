$(document).ready(function () {
    $("#altura").on("input", function () {
        if ($(this).val().length >= 3) {
            $("#peso").focus();
        }
    });

    aplicarMascaras();

    function aplicarMascaras() {
        aplicarMascaraAltura();
        aplicarMascaraPeso();
    }

    function aplicarMascaraAltura() {
        $("#altura").mask("0,00");
    }

    function aplicarMascaraPeso() {
        $('#peso').mask("#000,00", { reverse: true });
    }
});


function changeElementStyle(id, fontWeight, backgroundColor) {
    const element = document.getElementById(id);
    element.style.fontWeight = fontWeight;
    element.style.backgroundColor = backgroundColor;
}

function CalcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value.replace(',', '.'));
    const peso = parseFloat(document.getElementById("peso").value.replace(',', '.'));
    const imc = peso / (altura ** 2);

    const ranges = [
        { id: "abaixo-do-peso", min: 0, max: 18.4 },
        { id: "peso-normal", min: 18.5, max: 24.9 },
        { id: "sobrepeso", min: 25, max: 29.9 },
        { id: "obesidade-grau-um", min: 30, max: 34.9 },
        { id: "obesidade-grau-dois", min: 35, max: 39.9 },
        { id: "obesidade-grau-tres-ou-morbida", min: 40, max: Infinity }
    ];

    for (const range of ranges) {
        if (imc >= range.min && imc <= range.max) {
            changeElementStyle(range.id, 'bolder', '#e7e7e7');
        } else {
            changeElementStyle(range.id, 'normal', '#fff');
        }
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = `SEU IMC: ${imc.toFixed(2).replace(".", ",")}`;
    resultadoElement.style.fontWeight = 'bolder';
    resultadoElement.style.fontSize = '1em'; /* 16px */
}

function Limpar() {
    const ids = [
        "altura", "peso", "resultado",
        "abaixo-do-peso", "peso-normal", "sobrepeso",
        "obesidade-grau-um", "obesidade-grau-dois", "obesidade-grau-tres-ou-morbida"
    ];

    for (const id of ids) {
        const element = document.getElementById(id);
        element.value = "";

        if (id === "resultado") {
            element.innerHTML = "SEU IMC: ";
        } else {
            changeElementStyle(id, 'normal', '#fff');
        }
    }
}
