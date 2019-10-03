import React from 'react';
import styled from 'styled-components';
import { Post } from './Post';
import { tsConstructorType } from '@babel/types';

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
`
const AdicionarPost = styled.div`
    border: 1px solid #e6e6e6;
    width: 300px;
    margin: 10px;
`

const FormularioPost = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const BtnPostar = styled.button`
    margin: 10px;
`

const TituloAdicionarPost = styled.h1`
    margin: 10px;
`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listaDePosts: [
        {
          username: "",
          userimage: "",
          postimage: "",
        }
      ]
    }
  }

  adicionarPost = () =>{
    console.log('Nova postagem', this.state.username, this.state.userimage, this.state.postimage);
    const novoPost = {
      username: this.state.username,
      userimage: this.state.userimage,
      postimage: this.state.postimage,
    }
    const copiaNovoPost = [novoPost, ...this.state.listaDePosts, ]

    this.setState({
    listaDePosts: copiaNovoPost,
    username: "",
    userimage: "",
    postimage: "",
    })
  }

  onChangeUserName = (event) => {
    this.setState({username: event.target.value})
  }

  onChangeUserImage = (event) => {
    this.setState({userimage: event.target.value})
  }

  onChangePostImage = (event) => {
    this.setState({postimage: event.target.value})
  }

  render() {

    const listaDePostagens = this.state.listaDePosts.map((post, index) => {
      return <Post image={post.postimage} profilePicture={post.userimage} username={post.username} />;
    });


    return (

      <MainArea>

        <AdicionarPost>

          <TituloAdicionarPost>New Post</TituloAdicionarPost>

          <FormularioPost>

            <label for username>Usuário</label>
            <input type="text"
            placeholder="Nome de usuário"
            value={this.state.username}
            onChange={this.onChangeUserName} 
            />

            <label for imgusuario>Imagem de Usuario</label>
            <input type="text"
            placeholder="URL da user img"
            value={this.state.userimage}
            onChange={this.onChangeUserImage} 
            />

            <label for imgpost>Imagem</label>
            <input type="text"
            placeholder="URL do post"
            value={this.state.postimage}
            onChange={this.onChangePostImage} 
            />

            <BtnPostar type="button" onClick={this.adicionarPost}>Postar</BtnPostar>

          </FormularioPost>

        </AdicionarPost>

        {listaDePostagens}

      </MainArea >
    )
  }
}

export default App;
