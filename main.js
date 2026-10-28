

function happy(  ){
    alert("BEM VINDO AO PARQUE HOPPY HAPPY")
    let altura = Number(prompt("Digite sua altura!" ))


if ( altura >=1.5){
    alert("Boa Diversão!!");

}
else{
    alert("Que pena, Voce nao pode brincar :(")
}

}

function mercado ( ){
alert("Verificação de estoque!")
let estoque = Number(prompt("Digite o numero do estoque do produto!"))
if(estoque<5){
    alert("O estoque esta Baixo")
}
else{
    alert("Estoque esta OK!")
}
}
function  isento(){
    alert("verificação de valores!")
    let valor1 = Number(prompt("digite o valor que tem na sua conta !"))
    if(valor1<756.5) {
        alert("isento")
    }
    else{
        alert("Taxa de 10% por impostos")
    }
}
function aprovaçao(){
    alert("verificação de conselho")
    let aprovado = Number(prompt("digite sua nota!"))
    if(aprovado>=5){
        alert("Aprovado!!")

    }
    else{
        alert("REPROVADO!!!😡")
    }
}
function cor (){
    alert("teste de cores")
    let cores = prompt("digite uma cor!")
    let coress= prompt("digite outra cor ou a mesma!")
    if(cores=coress){
        alert("Verdadeiro")
    }
    else{
        alert("Falso")
    }
}
function numeros (){
    alert("divirtasse com numeros!")
    let number = Number(prompt("digite um numero"))
    if(number<= 1){
        alert("Valor Baixo")
    }
    else{
        alert(number * 100)
    }
}
function valores (){
    alert("valores qualquer")
    let valor = Number(prompt("digite um valor qualquer"))
    if(valor<= 3.5){
        alert("Está barato!")

    }
    else{alert(`Valor ${valor}`)}
}
function nome (){
    alert("Adivinhe o Nome")
    let nomes = prompt("Digite qualque Nome!")
    if(nomes == marisa){
        alert("Acertou")
    }
    else{
        alert("ERROUUUUU!")
    }
}