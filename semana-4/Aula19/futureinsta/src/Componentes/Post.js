import React from 'react';
import './Post.css';

export class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mostraTitulo: false,
      showComments: false,
      numComentarios: 0,
    };
  }

  // Mudar imagem no clique
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? 'minus' : 'plus';

  // Mudar número de curtidas
  onClickButtonTitulo = () => {
    const mostraTituloAtual = this.state.mostraTitulo;
    const novoEstado = {
      mostraTitulo: !mostraTituloAtual
    }
    this.setState(novoEstado);
  }

  // Exibir ou não os comentários
  onClickShowComment = () => {
    const showComments1 = this.state.showComments;
    const newComment = {
      showComments: !showComments1
    }
    this.setState(newComment);
  }

  // Contador de comentários
  onClickAddComentario = () => {
    const comentariosAtuais = this.state.numComentarios;
    const novoComentario = {
      numComentarios: comentariosAtuais + 1,
    }
    this.setState(novoComentario);
    console.log(novoComentario);
  }

  render() {

    // Images de like/dislike
    const imagesPath = {
      minus: "https://i.imgur.com/DXpbaoP.png",
      plus: "https://i.imgur.com/QxEPvux.png"
    }

    const imageName = this.getImageName();

    // Curtidas e comentários
    let titulo = 0;
    let numeroComentarios = this.state.numComentarios;

    // Se o mostratitulo === true, então mostra esse titulo aí entre ()
    if (this.state.mostraTitulo) {
      titulo = (1)
    }

    //Comentários inicialmente ocultos
    let comments = "";

    // Se showcomments === true, então mostra os comentários
    if (this.state.showComments) {
      comments = (
        <div className="comentariosTexto">
          <input type="text" placeholder="Escreva seu comentário..." />
          <button
            onClick={() => {
              this.onClickAddComentario();
              this.onClickShowComment()
            }
            }
          >Comentar</button>
        </div>

      );
    }

    return (
      <div className="App">


        <div className="Post">

          <div className="topo">
            <p>Future4.br</p>
          </div>

          <img className="imgpost" src={"https://picsum.photos/500/400"} alt="" />

          <div className="postInfo">

            <div className="curtidas">
              <img src={imagesPath[imageName]}
                onClick={() => {
                  this.toggleImage();
                  this.onClickButtonTitulo()
                }
                }
                alt="Curtir!"
              />
              <p>{titulo}</p>
            </div>

            <div className="comentarios">
              <img src={"https://i.imgur.com/T5tfhqf.png"}
                onClick={this.onClickShowComment}
                alt=""
              />
              <p>{numeroComentarios}</p>
            </div>

          </div>

          {comments}

        </div>


      </div>
    );
  }
}

export default Post;
