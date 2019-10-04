import React from 'react';
import { PostHeader } from './PostHeader';
import styled from 'styled-components';

const PostContainer = styled.div`
  border: 1px solid #e6e6e6;
  width: 300px;
  margin: 10px 0;
`
const BtnPostContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
`
const ImgPostContainer = styled.img`
  width: 100%;
`
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`
const ImgBtnContainer = styled.img`
  margin-right: 5px;  
`
const ComentarioContainer = styled.div`
  display: flex;
  padding: 5px;
`
const InputComentarioContainer = styled.input`
  display: flex;
  align-items: center;
  width: 80%;
  margin-right: 5px;
`

export class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curtiu: false,
      totalCurtidas: 0,
      totalComentarios: 0,
      comentar: false,
    }
  }

  onCurtir = () => {
    if (this.state.curtiu) {
      this.setState(
        { curtiu: false, totalCurtidas: this.state.totalCurtidas - 1 }
      )
    } else {
      this.setState(
        { curtiu: true, totalCurtidas: this.state.totalCurtidas + 1 }
      )
    }
  }

  onComentar = () => {
    this.setState({ comentar: true })
  }

  sendComment = () => {
    this.setState(
      { totalComentarios: this.state.totalComentarios + 1, 
        comentar: false 
      }
    )
  }

  render() {

    let btncurtir;
    if (this.state.curtiu) {
      btncurtir = "https://i.imgur.com/DXpbaoP.png"
    } else {
      btncurtir = "https://i.imgur.com/QxEPvux.png"
    }

    let comentarios;
    if (this.state.comentar) {
      comentarios = (<ComentarioContainer>
        <InputComentarioContainer placeholder="Escreva seu comentário..." />
        <button onClick={this.sendComment}>Enviar!</button>
      </ComentarioContainer>
      )
    }

    return (

      <PostContainer>
        <PostHeader 
        profilePicture={this.props.profilePicture} 
        username={this.props.username} 
        />

        <ImgPostContainer 
        src={this.props.image} 
        alt="" 
        />

        <BtnPostContainer>

          <BtnContainer>
            <ImgBtnContainer src={btncurtir} alt="" 
            onClick={this.onCurtir} />
            <p>{this.state.totalCurtidas}</p>
          </BtnContainer>

          <BtnContainer>
            <ImgBtnContainer src={"https://i.imgur.com/T5tfhqf.png"} 
            alt="" onClick={this.onComentar} />
            <p>{this.state.totalComentarios}</p>
          </BtnContainer>

        </BtnPostContainer>

        {comentarios}

      </PostContainer>
    )
  }
}