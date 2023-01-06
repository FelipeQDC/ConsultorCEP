"use strict";

const cep = document.getElementById("cep");
const btnPesquisar = document.getElementById("btnPesquisar");
const saida = document.getElementById("saida");
const corpo2 = document.getElementById("corpo2")


function getCep(){
    return  cep.value;
}
function exibirDadosDoCEP(obj){
    if(!obj.erro){
        let dadosCEP = `${obj.logradouro}<br>
                        ${obj.complemento}<br>
                        ${obj.bairro}<br>
                        ${obj.localidade}/${obj.uf}`;
        return dadosCEP;
    }else{
        return "CEP inexistente";
    }

}


async function buscarDadosCep(){

    let urlCEP = `https://viacep.com.br/ws/${getCep()}/json/`;
    saida.textContent = "";
//fetch ele faz a busca 
    
    try {
        const  CEPbuscado = fetch(urlCEP);//ele busca o objeto pela url 
        const resposta = await CEPbuscado;//ele faz esperar o retorno da variável buscar
        const dadosCEPJSON = await resposta.json();//
        saida.innerHTML = exibirDadosDoCEP(dadosCEPJSON);
    } catch (e){
        saida.textContent = e;
    }
}
btnPesquisar.onclick = function () {
  
        corpo2.classList.remove("esconde");
    
}


btnPesquisar.addEventListener("click", buscarDadosCep);


