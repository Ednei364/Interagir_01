var nome = prompt("Qual seu nome? ");
var nasc = prompt(`${nome} em que ano voce nasceu?`)
var nasc1 = parseInt(nasc)
now = new Date
var Year = now.getFullYear()
var idade = Year - nasc1
var saldacao = confirm(`Olá ${nome}, tudo bom com vossa senhoria?`)
 if(saldacao== true){
     alert(`Este ano de ${Year} você irá completar ${idade} anos!!`)
 }else{
     alert(` Que pena meu amigo,${nome} melhoras pra você e até a próxima`)
 }


