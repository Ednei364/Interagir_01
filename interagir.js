const button = document.querySelector('[data-js="button"]');
const apresentar = document.querySelector('[data-js="apresentacao"]')
const operacao = document.querySelector('[data-js="operacao"]')
const number1 = document.querySelector('[data-js="number1"]')
const number2 = document.querySelector('[data-js="number2"]')
const result = document.querySelector('[data-js="observacao"]')
const sum = document.querySelector('[data-js="+"]')
const sub = document.querySelector('[data-js="-"]')
const mul = document.querySelector('[data-js="*"]')
const div = document.querySelector('[data-js="/"]')
const name = document.querySelector('[data-js="nome"]')
const idade = document.querySelector('[data-js="idade"]')
const nascimento = document.querySelector('[data-js=nascimento]')

button.onclick= function(){
    name.value = "não"
    idade.value = "tem"
    nascimento.value="nada configurado ainda kk"
    //  var $fragment = document.createDocumentFragment();
    //  var $tr = document.createElement('tr');
    //  var $tdColor =  document.createElement('td');
    //  $tdColor.textContent = $('[data-js="number1"]').get().value;
    //  $tr.appendChild($tdColor);
    //  return $fragment.appendChild($tr);
 }

sum.onclick = function(){
    res = +number1.value + +number2.value
    result.value = `O resultado de (${number1.value})+(${number2.value}) é igual ${res} unidades`
    number1.value = res
}
sub.onclick = function(){
    res = +number1.value - +number2.value
    result.value = `O resultado de (${number1.value})-(${number2.value}) é igual ${res} unidades`
    number1.value = res
}
mul.onclick = function(){
    res = +number1.value * +number2.value
    result.value = `O resultado de (${number1.value})*(${number2.value}) é igual ${res} unidades`
    number1.value = res
}
div.onclick =function(){
    res = +number1.value / +number2.value
    result.value = `O resultado de (${number1.value})/(${number2.value}) é igual ${res} unidades`
    number1.value = res

}
apresentar.onclick = function(){
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
}

 


