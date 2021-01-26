var nome = prompt("Qual seu nome? ");
var saldacao = confirm(`Olá ${nome}, tudo bem contigo?`)
saldacao == true ? alert(`Que bom ${nome}`):alert(` Que pena meu amigo,${nome}`)

 var nasc = prompt(`${nome} em que ano voce nasceu?`)
 nasc1 = parseFloat(nasc)
 var tipo = typeof(nasc1)
 now = new Date
 var Year = now.getFullYear()
 var idade = Year - nasc1
 if(isNaN(nasc1)){
    alert(`Dados informado não é equivalente a um número, favor recarregar a página e tente novamente`)
    }else{
     if(nasc1 > 1950){
         if(nasc1 < 2021){
             if(nasc1 == 2020){
                alert(`Este ano de ${Year}, você irar completar seu primeiro ano de vida.`)
             }else{
                alert(`Este ano de ${Year}, você irar completar ${idade} anos`)
             }             
         }else{
             alert(`Informe um ano inferior a 2021, favor recarregar a página e tente novamente`)
         }
     }else{
         alert(`Informe um ano superio a 1950, favor recarregar a página e tente novamente`)
     }
 var agradecimento = alert(`Obrigado por participar ${nome}, até a proxima meu amigo. `)
     
 }
var button = document.querySelector('[data-js="button"]');

button.onclick = function() {
    alert(`NÃO FALEI PRA NÃO CLICAR KKKK não tem nada aqui`)
//   var nome = prompt('Qual é o seu nome?');
//   alert('Olá ' + nome + ', é um prazer te ver!');
}


 


