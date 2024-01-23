    const calcular = document.getElementById("button");
    let resultado = peso / (altura *altura);
    
    document.querySelector("#button").addEventListener('click',function(){
        let peso = document.querySelector("#peso").value;
        let altura = document.querySelector("#altura").value;

        peso = parseFloat(peso);
        altura = parseFloat(altura);

        if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        let resultado = peso / (altura *altura);
        const imcResultado = document.getElementById("imc_result");
        const resultadoTotal = document.getElementById("resultado");

        resultadoTotal.style.display="block";
        imcResultado.innerHTML =`  ${resultado.toFixed(1)}`

        const txt = document.getElementById("texto");
        if(resultado <=16.9){
            txt.innerText="Você esta muito abaixo do peso";
        }
        else if(resultado>=17 && resultado <=18.4){
            txt.innerText="Você esta abaixo do peso";
        }
        else if(resultado>=18.5 && resultado <=24.9){
            txt.innerText="Você esta com um peso normal";
        }
        else if(resultado>=25 && resultado <=29.9){
            txt.innerText="Você esta acima do peso";
        }
        else if(resultado>=30 && resultado <=34.9){
            txt.innerText="Você esta com obesidade de 1° grau";
        }
        else if(resultado>=35 && resultado <=40){
            txt.innerText="Você esta com obesidade de 2° grau";
        }
        else if(resultado>=41){
            txt.innerText="Você esta com obesidade de 3° grau";
        }
    })