import React from 'react';
import './App.css';
import { BigCard } from './components/BigCard/BigCard';
import { SmallCard } from './components/SmallCard/SmallCard';
import { ImageButton } from './components/ImageButton/ImageButton';


const bigcardpessoa = {
  nome: 'Thiago Fernandes',
  foto: "https://image.flaticon.com/icons/svg/64/64096.svg",
  bio: 'Apaixonado por jogos, atuo como storyteller e consultor de Game Design e Gamificação. Minha missão é criar histórias imersivas, jogos e narrativas interativas épicas que conquistam as pessoas.'
}

const bigcardempresa1 = {
  nome: 'Empresa 1',
  foto: "https://i.imgur.com/Qq5qSTS.png",
  bio: "Blablabla, cursando etc etc"
}

const bigcardempresa2 = {
  nome: 'Empresa 2',
  foto: "https://i.imgur.com/Qq5qSTS.png",
  bio: "Blablabla mais blablabla etc etc"
}

const email1 = {
  imagem: "https://svgshare.com/i/FGj.svg",
  card: "Email: ",
  info: 'thiago@spellbook.com.br'
}

const endereco1 = {
  imagem: "https://svgshare.com/i/FHE.svg",
  card: "Endereço: ",
  info: 'Sdds do meu c# sdds, 123'
}

const botaoVerMais = {
  imagem: "https://svgshare.com/i/FH5.svg",
  texto: "Ver mais"
}

const botaoFacebook = {
  imagem: "https://i.imgur.com/kohZUgR.jpg",
  texto: "Facebook"
}


function App() {
  return (
    <div className="App">
      <div className="pageSection">

        <h1>Dados Pessoais</h1>

        <BigCard nome={bigcardpessoa.nome} foto={bigcardpessoa.foto} bio={bigcardpessoa.bio} />
        <SmallCard imagem={email1.imagem} card={email1.card} info={email1.info}  />
        <SmallCard imagem={endereco1.imagem} card={endereco1.card} info={endereco1.info}  />
        <ImageButton imagem={botaoVerMais.imagem} texto={botaoVerMais.texto} />

        <h1>Experiências Profissionais</h1>

        <BigCard nome={bigcardempresa1.nome} foto={bigcardempresa1.foto} bio={bigcardempresa1.bio} />
        <BigCard nome={bigcardempresa2.nome} foto={bigcardempresa2.foto} bio={bigcardempresa2.bio} />

        <h1>Redes Sociais</h1>
        <ImageButton imagem={botaoFacebook.imagem} texto={botaoFacebook.texto} />

      </div>















    </div>
  );
}

export default App;
