import React, { Component } from "react";
import "./NewPost.css";
import styled from 'styled-components';


export class NewPost extends Component {
    constructor() {
        super();
        this.state = {
            listaDeitens: [
                {
                    texto: "blabla",
                    cor: "#ff0000"
                },
            ],

            nomeUsuario: "",
            valorCor: "",

        };
    }

    adicionarItem = () => {
        console.log('Adicionando item', this.state.nomeUsuario, this.state.valorCor);
        const novoItem = {
            texto: this.state.nomeUsuario,
            cor: this.state.valorCor,
        }

        const copiaListaDeItens = [novoItem, ...this.state.listaDeitens,]

        this.setState({
            listaDeitens: copiaListaDeItens,
        })

    }

    onChangeTexto = (event) => {
        this.setState({ valorTexto: event.target.value })
    }

    render() {
        const listaDeElementos = this.state.listaDeitens.map((item, index) => {
            return <li key={index}>{item.texto + " " + item.cor}</li>;
        });

        return (

            <div className="new-post">

                <h1>New Post</h1>
                <form>
                    <div className="userName">
                        <label for nomeusuario>Usuário: </label>
                        <input type="text"
                            placeholder="Username..."
                            value={this.state.valorTexto}
                            onChange={this.onChangeTexto} />
                    </div>
                    <div className="imgPost">
                        <label for imgpost>Imagem: </label>
                        <input type="text"
                            placeholder="Imagem..."
                            value={this.state.valorTexto}
                            onChange={this.onChangeTexto} />
                    </div>

                    <button onClick={this.adicionarItem}>Postar!</button>
                </form>

                <ul>
                    {listaDeElementos}
                </ul>
            </div>

        );
    }
}
