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

    document.querySelector("input").value = "";
    document.querySelector("textarea").value = "";

    // JOGAR NOVO POST NA DIV CERTA
    const novoTitulo = document.querySelector(".titulopost");
    const novoAutor = document.querySelector(".autorpost");
    const novoConteudo = document.querySelector(".novoconteudo");

    novoTitulo.innerHTML = postagem.titulo;
    novoAutor.innerHTML = postagem.autor;
    novoConteudo.innerHTML = postagem.conteudo;

}


