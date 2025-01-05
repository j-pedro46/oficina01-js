    function enviar(){
        var peso =   parseFloat(document.getElementById("peso").value)
        var altura = parseFloat(document.getElementById("altura").value)   
        var resultado = document.getElementById("resultado")
        var imc = (peso / (altura * altura)).toFixed(2)
        var categoria
        if(imc <18.5){
            categoria  = "Abaixo do peso"
        }
        if (imc >=18.5 && imc <=24.9){
            categoria = "Peso normal"
        }
        if (imc >=25 && imc <=29.9 ){
            categoria = "Sobrepeso"
        }
        if (imc >=30 && imc <=34.9 ){
            categoria = "Obesidade grau 1"
        }
        if (imc >=35 && imc <=39.9 ){
            categoria = "Obesidade grau 2"
        }
        if(imc >40){
            categoria = "Obesidade grau"
        }
        resultado.innerHTML = "Seu IMC é:"+imc+ " sua categoria é:"+categoria; 
}