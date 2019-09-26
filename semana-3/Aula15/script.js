

// CLASSE DO POST
class Post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
    }
}

// ARRAY DO POST
const listaDePosts = [];

// CRIAR NOVO POST, INSTACIANDO A CLASSE E ADICIONANDO AO ARRAY
function newPost() {
    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const conteudo = document.getElementById("conteudo");


    // imagem ainda não funciona
    const postagem = new Post(titulo.value, autor.value, conteudo.value);

    listaDePosts.push(postagem);
    console.log(listaDePosts);

    // LIMPAR INPUTS E TXTAREA DEPOIS DE ENVIAR
    document.querySelector("#titulo").value = "";
    document.querySelector("#autor").value = "";
    document.querySelector("#conteudo").value = "";

    // JOGAR NOVO POST NAS DIVS CERTAS

    const novoPost = document.querySelector(".postagens");
    novoPost.innerHTML += "<div>" + postagem.titulo + "</div>" +
                          "<div>" + postagem.autor + "</div>" + 
                        "<div>" + postagem.conteudo + "</div>" +
                        "<hr>"

}


