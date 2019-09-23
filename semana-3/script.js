

//eu sei que pra escolher o dia da semana seria algo como:
//let dia = document.getElementById("diaDaSemana").value


function criarItem() {

    let valorDoInput = document.querySelector("input").value;
    let novaTarefa = document.createElement("li");

    let listaTarefas = document.querySelector("#segunda ul");

    novaTarefa.innerHTML = valorDoInput;
    listaTarefas.append(novaTarefa);

    document.querySelector("input").value = "";

}

