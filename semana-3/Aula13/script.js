// -------------- ADICIONANDO ITEM NA LISTA --------------

function criarItem() {

    // Checa se o input está vazio e impede a entrada em branco
    let valorDoInput = document.querySelector("input").value;
    if (document.querySelector("input").value === ""){
        alert("Tarefa não pode estar em branco!");
        return;
    }

    let novaTarefa = document.createElement("li");
    let dia = document.getElementById("diaDaSemana").value
    let listaTarefas;

    // Checa o dia da semana e atribui valor ao queryselector
    switch (dia) {
        case "Segunda":
            listaTarefas = document.querySelector("#segunda ul");
            novaTarefa.innerHTML = valorDoInput;
            listaTarefas.append(novaTarefa);
            document.querySelector("input").value = "";
            break;
        case "Terça":
            listaTarefas = document.querySelector("#terca ul");
            novaTarefa.innerHTML = valorDoInput;
            listaTarefas.append(novaTarefa);
            document.querySelector("input").value = "";
            break;
        case "Quarta":
            listaTarefas = document.querySelector("#quarta ul");
            novaTarefa.innerHTML = valorDoInput;
            listaTarefas.append(novaTarefa);
            document.querySelector("input").value = "";
            break;
        case "Quinta":
            listaTarefas = document.querySelector("#quinta ul");
            novaTarefa.innerHTML = valorDoInput;
            listaTarefas.append(novaTarefa);
            document.querySelector("input").value = "";
            break;
        case "Sexta":
            listaTarefas = document.querySelector("#sexta ul");
            novaTarefa.innerHTML = valorDoInput;
            listaTarefas.append(novaTarefa);
            document.querySelector("input").value = "";
            break;
        case "Sábado":
            listaTarefas = document.querySelector("#sabado ul");
            novaTarefa.innerHTML = valorDoInput;
            listaTarefas.append(novaTarefa);
            document.querySelector("input").value = "";
            break;
        case "Domingo":
            listaTarefas = document.querySelector("#domingo ul");
            novaTarefa.innerHTML = valorDoInput;
            listaTarefas.append(novaTarefa);
            document.querySelector("input").value = "";
            break;
    }

}

// FUNÇÃO PRA RISCAR ELEMENTO CLICADO (teoricamente, né)

// function riscarItem() {

//     let item = document.querySelector("li");
//     item.style.setProperty('text-decoration', 'line-through');
    
//   }

