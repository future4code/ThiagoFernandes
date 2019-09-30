class Despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }
}

//ARRAY DE TODAS AS DESPESAS
const listaDespesas = [];


// CADASTRAR DESPESA
function novaDespesa() {
    const valor = document.getElementById("valorDespesa").value;
    const descricao = document.getElementById("descricaoDespesa").value;
    let tipo;
    const checarTipo = document.getElementById("tipoDespesa").value;

    switch (checarTipo) {
        case "Comida":
            tipo = "Comida";
            break;
        case "Contas":
            tipo = "Contas";
            break;
        case "Viagens":
            tipo = "Viagens";
            break;
        case "":
            tipo = "";
            break;
    }

    if(document.getElementById("valorDespesa").value == "") {
        alert('Por favor, preencha o valor');
        document.getElementById("valorDespesa").focus();
        return false;
    } else if (tipo == "") {
        alert('Por favor, selecione um tipo');
        document.getElementById("tipoDespesa").focus();
        return false;
    } else if (document.getElementById("descricaoDespesa").value == "") {
        alert('Por favor, preencha a descrição');
        document.getElementById("descricaoDespesa").focus();
        return false;
    }

    const gastos = new Despesa(valor, tipo, descricao);

    listaDespesas.push(gastos);
    console.log(listaDespesas);

    // LIMPAR CAMPOS APÓS ENVIAR
    document.getElementById("valorDespesa").value = "";
    document.getElementById("descricaoDespesa").value = "";

    // EXIBIR RESULTADOS
    const newExtrato = document.querySelector(".exibirDespesas");
    newExtrato.innerHTML += "<div> Tipo de gasto: " + gastos.tipo + "</div>" +
        "<div> Valor: " + gastos.valor + "</div>" +
        "<div> Descrição: " + gastos.descricao + "</div>" +
        "<hr>"
}



function filtraDespesa() {

    const valorMinimo = document.getElementById("valorMinimo").value;
    const valorMaximo = document.getElementById("valorMaximo").value;
    let tipo;
    const checarTipo = document.getElementById("filtroTipoDespesa").value;

    switch (checarTipo) {
        case "Comida":
            tipo = "Comida";
            break;
        case "Contas":
            tipo = "Contas";
            break;
        case "Viagens":
            tipo = "Viagens";
            break;
        case "":
            tipo = "";
            break;
    }

    // FILTRAR POR TIPO 
    // checar como filtrar pelos valores
    const despesasFiltradas = listaDespesas.filter(item => {
        return item.tipo === tipo;
    })

    //teste
    //console.log(despesasFiltradas);

    // EXIBIR RESULTADOS
    const novoExtrato = document.querySelector(".extrato");
    for (let filtrado of despesasFiltradas) {
        novoExtrato.innerHTML += "<div> Tipo de gasto: " + filtrado.tipo + "</div>" +
            "<div> Valor: " + filtrado.valor + "</div>" +
            "<div Descrição: " + filtrado.descricao + "</div>" + 
            "<hr>"
    }

}

// LIMPAR CAMPO (tem algo errado aqui, i guess)
function limparCampos() { 
    remover = document.querySelector(".extrato");
    remover.parentNode.removeChild(remover);
}