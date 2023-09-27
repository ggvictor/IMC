
function evento(){
    let nome = document.querySelector("#nome").value;
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let resultado = peso / (altura *altura);
    document.getElementById("texto").innerHTML=(` olá ${nome} , seu peso é de ${peso}KG e sua altura de ${altura} portanto seu imc é igual a ${resultado.toFixed(1)}`);
}