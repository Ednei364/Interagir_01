var nome = prompt("Qual seu nome? ");
var saldacao = confirm(`Olá ${nome}, tudo bem contigo?`)
saldacao == true ? alert(`Que bom ${nome}`):alert(` Que pena meu amigo,${nome}`)

var nasc = prompt(`${nome} em que ano voce nasceu?`)
var tipo = typeof(nasc)
now = new Date
var Year = now.getFullYear()
var idade = Year - nasc
if(tipo == "number"){
    if(nasc1 > 1950){
        if(nasc1 < 2021){
            alert(`Este ano de ${Year}, você irar completar ${idade} anos`)
        }else{
            alert(`Informe um ano inferior a 2021, favor recarregar a página e tente novamente`)
        }
    }else{
        alert(`Informe um ano superio a 1950, favor recarregar a página e tente novamente`)
    }
}else{
    alert(`Dados informado não é equivalente a um número, favor recarregar a página e tente novamente`)
}


 


