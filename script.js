console.log("meu primeiro script")
let nome = "Miola"
let idade = 16
let ativo = true
 
 
console.log('nome: ', nome)
console.log('idade: ', idade)
console.log('ativo: ', ativo)
 
 
function somar(a, b){
    return a + b;
};
console.log(somar(5, 3));
 
document.getElementById('meuBotao').addEventListener('click', function() {
    alert('voce clicou no botao!');
});