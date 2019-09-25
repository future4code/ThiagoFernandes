// ARRAY DO POST
const listaDePosts = [];

// CLASSE DO POST
class Post {
    constructor(titulo, autor, imagem, conteudo) {
        this.titulo = titulo;
        this.autor = autor;
        this.imagem = imagem;
        this.conteudo = conteudo;
        
    }
}

// CRIAR NOVO POST, INSTACIANDO A CLASSE E ADICIONANDO AO ARRAY
function newPost() {
    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const imagem = document.getElementById("img").src;
    const conteudo = document.getElementById("conteudo");


    // imagem ainda não funciona
    const postagem = new Post(titulo.value, autor.value, imagem.value, conteudo.value);

    listaDePosts.push(postagem);
    console.log(postagem);

    // LIMPAR INPUTS E TXTAREA DEPOIS DE ENVIAR
    document.querySelector("#titulo").value = "";
    document.querySelector("#autor").value = "";
    document.querySelector("#conteudo").value = "";

    // JOGAR NOVO POST NAS DIVS CERTAS
    const novoTitulo = document.querySelector(".titulopost");
    const novoAutor = document.querySelector(".autorpost");
    const novoConteudo = document.querySelector(".novoconteudo");
    //não funciona
    //const novaImagem = document.querySelector(".imagempost");

    novoTitulo.innerHTML = postagem.titulo;
    novoAutor.innerHTML = postagem.autor;
    novoConteudo.innerHTML = postagem.conteudo;
    //ver pq isso não funciona aff
    //novaImagem.innerHTML = postagem.imagem;

}


