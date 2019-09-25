// ARRAY DO POST
const listaDePosts = [];

// CLASSE DO POST
class Post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
    }
}

// CRIAR NOVO POST, INSTACIANDO A CLASSE E ADICIONANDO AO ARRAY
function newPost() {
    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const conteudo = document.getElementById("conteudo");

    const postagem = new Post(titulo.value, autor.value, conteudo.value);

    listaDePosts.push(postagem);
    console.log(postagem);

    // LIMPAR INPUTS E TXTAREA DEPOIS DE ENVIAR
    // (ver pq não limpa todos os input com o queryselectorAll)
    document.querySelector("#titulo").value = "";
    document.querySelector("#autor").value = "";
    document.querySelector("#conteudo").value = "";

    // JOGAR NOVO POST NAS DIVS CERTAS
    const novoTitulo = document.querySelector(".titulopost");
    const novoAutor = document.querySelector(".autorpost");
    const novoConteudo = document.querySelector(".novoconteudo");

    novoTitulo.innerHTML = postagem.titulo;
    novoAutor.innerHTML = postagem.autor;
    novoConteudo.innerHTML = postagem.conteudo;

}


