import React from 'react';
import './App.css';
import imgPlaceholder from '../src/img-placeholder.jpg';
import imgvideo1 from '../src/video1.png';
import imgvideo2 from '../src/video2.png';
import imgvideo3 from '../src/video3.png';
import imgvideo4 from '../src/video4.png';
import imgvideo5 from '../src/video5.png';
import imgvideo6 from '../src/video6.png';
import imgvideo7 from '../src/video7.png';

function App() {
  return (
    <div className="App">

      <header>
        <div>
          <h1>FutureTube</h1>
        </div>
        <div>
          <input type="text" id="searchBar" placeholder="Buscar..."></input>
          <button id="searchBtn">Buscar</button>
        </div>
      </header>

      <section className="main">

        <nav className="barra-lateral">
          <ul>
            <a href="index.html">
              <li>Inicio</li>
            </a>
            <li>Em Alta</li>
            <li>Inscrições</li>
            <li>Originais</li>
            <hr></hr>
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>
        </nav>

        <div className="main-area">

          <div className="video-area">
            <a href="video1.html">
              <img alt="" src={imgvideo1}></img>
              
            </a>
            <p>Céu estrelado</p>
          </div>

          <div className="video-area">
            <a href="video2.html">
              <img alt="" src={imgvideo2}></img>
            </a>
            <p>Meu pesadelo</p>
          </div>

          <div className="video-area">
            <a href="video1.html">
              <img alt="" src={imgvideo3}></img>
            </a>
            <p>Jaws só que sem o tubarão</p>
          </div>

          <div className="video-area">
            <a href="video1.html">
              <img alt="" src={imgvideo4}></img>
            </a>
            <p>Piscina de formiga</p>
          </div>

          <div className="video-area">
            <a href="video1.html">
              <img alt="" src={imgvideo5}></img>
            </a>
            <p>Limão morre afogado</p>
          </div>

          <div className="video-area">
            <a href="video1.html">
              <img alt="" src={imgvideo6}></img>
            </a>
            <p>#Partiu</p>
          </div>

          <div className="video-area">
            <a href="video1.html">
              <img alt="" src={imgvideo7}></img>
            </a>
            <p>Definitivamente não é o RJ</p>
          </div>

          <div className="video-area">
            <a href="video1.html">
              <img alt="" src={imgPlaceholder}></img>
            </a>
            <p>Tecnicamente essa img é diferente</p>
          </div>

        </div>

      </section>

      <footer>
        <h1>Oi, eu moro no Footer!</h1>
    </footer>

    </div>
  );
}

export default App;
