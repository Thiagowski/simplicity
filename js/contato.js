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
botaoBuscar.addEventListener("click", async function () {
    // verificando se o CEP digitado NÃO TEM 9 DIGITOS  
    if (campoCep.value.length !== 9) {

        mensagemStatus.innerHTML = "Digite um CEP válido!";
        mensagemStatus.style.color = "purple";
        return;
    }

    // Guardando o valor do cep digitado
    let cepDigitado = campoCep.value;
    console.log(cepDigitado);

    /* AJAX - Asyncronous Javascript and XML
    Técnica de comunicação assíncrona (transmissão, recebimento) de dados MUITO USADA entre diferentes tipos de sistemas (site, aplicativo, jogo, software) e tecnologias (PHP, ASP, Java etc).  
*/

    // Etapa 1: Preparamos o endereço junto com o CEP digitado
    let endereco = `https://viacep.com.br/ws/${cepDigitado}/json/`;

    // Etapa 2: Acessamos o ViaCEP com o endereço ajustado 
    const resposta = await fetch(endereco);

    // Etapa 3: Extrair os dados que o ViaCEP processou
    const dados = await resposta.json(); //formato de OBJETO
    console.log(dados);

    // Etapa 4: lidando com os dados (em caso de erro ou sucesso)
    if ("erro" in dados) {
        mensagemStatus.innerHTML = "CEP inexistente! 🤷‍♂️";
        mensagemStatus.style.color = "red";
    } else {
        mensagemStatus.innerHTML = "CEP encontrado! ✌";
        mensagemStatus.style.color = "blue";


        // Selecionando os campos que estão escondidos
        const campos = document.querySelectorAll(".campos-restantes");

        // Loop for para acessar cada campo e remover a classe
        // fazendo com que cada campo volte a aparecer na tela
        for (let i = 0; i < campos.length; i++) {
            campos[i].classList.remove("campos-restantes");
        }

        // Atribuindo cada dado do ViaCEP à cada campo do formulario
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;

    }

}); //final da função/evento do botao buscar