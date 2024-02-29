let cont = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //pegar o valor digitado 
    let valorInput = input.value;

    //se nao for vazio, nem nulo,nem indefinido
    if ((valorInput !== "") && (valorInput !== null)  && (valorInput !== undefined) ){

        ++cont;

        let novoItem = `<div id ="${cont}" class="item">
        <div onclick="marcarTarefa(${cont})" class="item-icon">
            <i id="icone_${cont}" class="fa-regular fa-circle"></i>
        </div>
        <div onclick="marcarTarefa(${cont})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick = "deletar(${cont})" class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
    </div>`;

        // adiconar novo item no main
        main.innerHTML += novoItem;

        // zerar o campo
        input.value = "";
        input.focus();


    }
}

function deletar(id){
    var tarefa = document.getElementById(id);

    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item"){
        item.classList.add("clicado");

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fa-circle');
        icone.classList.add('fa-circle-check');

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove("clicado");

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fa-circle-check');
        icone.classList.add('fa-circle');
    }
}

input.addEventListener("keyup", function(event){
    // se teclou enter
    if(event.keyCode === 13 ){
        event.preventDefault();
        btnAdd.click();
    }
})