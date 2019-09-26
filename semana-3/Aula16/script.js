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
function novaDespesa(){
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
    }

    const gastos = new Despesa (valor, tipo, descricao);
    
    listaDespesas.push(gastos);
    console.log(listaDespesas);

    // LIMPAR CAMPOS APÓS ENVIAR
    document.getElementById("valorDespesa").value = "";
    document.getElementById("descricaoDespesa").value = "";

}

function filtraDespesa(){

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
    }

    // TESTE DE FILTRO
    const despesasFiltradas = listaDespesas.filter( item => {
        return item.tipo === tipo; 
    })

    console.log(despesasFiltradas);

    // EXIBIR RESULTADOS
    const novoExtrato = document.querySelector(".extrato");
    for (let filtrado of despesasFiltradas){
        novoExtrato.innerHTML += "<div> Tipo de gasto: " + filtrado.tipo + "</div>" +
                                 "<div> Valor: " + filtrado.valor + "</div>" +
                                 "<hr>"
    }
    

}






