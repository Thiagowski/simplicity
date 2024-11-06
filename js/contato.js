/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = document.querySelector("#cep");
const campoTelefone = document.querySelector("#telefone");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaoBuscar = document.querySelector("#buscar");
const mensagemStatus = document.querySelector("#status");

// ouvinte de evento para o botão Buscar
botaoBuscar.addEventListener("click", function(){
// verificando se o CEP digitado NÃO TEM 9 DIGITOS  
if(campoCep.value.lenght !== 9){

mensagemStatus.innerHTML = "Digite um CEP válido!";
mensagemStatus.style.color = "purple";
return;

}
});