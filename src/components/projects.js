import React from "react";
import './projects.css';
import netflixImg from '../image/netflixImg.png';
import buscadorImg from '../image/imgBuscador.jpg';
import playlistImg from '../image/imgPlaylist.jpg';
import imgCronometro from '../image/imgConometro.jpg';
import imgPsicologa from '../image/imgPsicologa.jpg';


function Projects(){
  return(
<div className="animationScreen">
    <div>
      <h1 className="title-Projects"> Meus Projetos </h1>
    </div>

  <div class="CSSgal">

  <s id="s1"></s> 
  <s id="s2"></s>
  <s id="s3"></s>
  <s id="s4"></s>
  <s id="s5"></s>

  <div class="slider">
    <div className="netflix-display">
      <div className="data-slide">
        <h1> Netflix </h1>
        <p> Site desenvolvido em React JS, inspirado na netflix. </p>
        <a href="https://github.com/VtaZinn/CloneNetflixReactJS" target="blank">
        <div className="data-GitHub">
          GitHub
        </div></a>
        <a href="https://clonenetflix-vta.netlify.app/" target="blank">
          <div className="data-Site">
            SITE
          </div>
        </a>
      </div>
		</div>

    <div>
      <div className="data-slide data-img-slide-buscador">
        <h1> Buscador de Cep </h1>
        <p> Site desenvolvido em React JS, o usuario <br/> insere o CEP e o sistema traz os dados </p>
        <a href="https://github.com/VtaZinn/CepReactJS" target="blank">
        <div className="data-GitHub">
          GitHub
        </div></a>
        <a href="https://buscadorcep-vta.netlify.app/" target="blank">
          <div className="data-Site">
            SITE
          </div>
        </a>
      </div>
		</div>
    
    <div>
      <div  className="data-slide data-img-slide-playlist">
        <h1> Playlist Spotify </h1>
        <p> Site desenvolvido em React JS, onde o usuario <br/> insere a playlist e o sistema traz as múscias</p>
        <a href="https://github.com/VtaZinn/PlaylistAPI"  target="blank">
          <div className="data-GitHub">
            GitHub
          </div>
        </a>
        <a href="https://playlist-vta.netlify.app/" target="blank">
          <div className="data-Site">
            SITE
          </div>
        </a>
      </div>
		</div>
    <div>
      <div className="data-slide data-img-slide-cronometro">
          <h1> Cronometro </h1>
          <p> Aplicativo desenvolvido em React Native, <br/> aplicativo é um cronometro que salva o tempo quando pausado. </p>
          <a href="https://github.com/VtaZinn/CronometroReactNative" target="blank">
            <div className="data-GitHub">
              GitHub
            </div>
          </a>
      </div>
		</div>
    <div>
      <div className="data-slide data-img-slide-psicologa">
          <h1> Psicologa Isabela Teixeira </h1>
          <p> Landing Page desenvolvida com HTML,CSS e JavaScript <br/> para a cliente Isabela Teixeira. </p>
          <a href="https://psicologaisabelateixeira.com.br/" target="blank">
            <div className="data-Site">
              SITE
            </div>
          </a>
      </div>
		</div>
  </div>
  
  <div class="prevNext">
    <div><a href="#s5"></a><a href="#s2"></a></div>
    <div><a href="#s1"></a><a href="#s3"></a></div>
    <div><a href="#s2"></a><a href="#s4"></a></div>
    <div><a href="#s3"></a><a href="#s5"></a></div>
    <div><a href="#s4"></a><a href="#s1"></a></div>
  </div>

  <div class="bullets">
    <a href="#s1">1</a>
    <a href="#s2">2</a>
    <a href="#s3">3</a>
    <a href="#s4">4</a>
    <a href="#s5">5</a>
  </div>
</div>

<div className="content-mobile">
  <div className="content-mobile-projects">
    <div className="img-mobile-projects">
      <img src={netflixImg}></img>
      <h1> Netflix </h1>
      <p> Site desenvolvido em React JS, inspirado na netflix. </p>
      <a href="https://github.com/VtaZinn/CloneNetflixReactJS" target="blank" className="gitTextDecoration">
          <div className="data-GitHub">
              GitHub
          </div>
      </a>
      <a href="https://clonenetflix-vta.netlify.app/" target="blank" className="gitTextDecoration">
        <div className="data-Site">
          SITE
        </div>
      </a>
    </div>
  </div>

  <div className="content-mobile-projects">
    <div className="img-mobile-projects">
      <img src={buscadorImg} className="buscador-img-mobile"></img>
      <h1> Buscador de Cep </h1>
      <p> Site desenvolvido em React JS, o usuario insere o CEP e o sistema traz os dados. </p>
      <a href="https://github.com/VtaZinn/CepReactJS" target="blank" className="gitTextDecoration">
          <div className="data-GitHub">
              GitHub
          </div>
      </a>
      <a href="https://buscadorcep-vta.netlify.app/" target="blank" className="gitTextDecoration">
        <div className="data-Site">
          SITE
        </div>
      </a>
    </div>
  </div>

  <div className="content-mobile-projects">
    <div className="img-mobile-projects">
      <img src={playlistImg} className="playlist-img-mobile"></img>
      <h1> Playlist Spotify </h1>
      <p>Site desenvolvido em React JS, onde o usuario insere a playlist e o sistema traz as múscias</p>
      <a href="https://github.com/VtaZinn/PlaylistAPI" target="blank" className="gitTextDecoration">
          <div className="data-GitHub">
              GitHub
          </div>
      </a>
      <a href="https://playlist-vta.netlify.app/" target="blank" className="gitTextDecoration">
        <div className="data-Site">
          SITE
        </div>
      </a>
    </div>
  </div>

  <div className="content-mobile-projects">
    <div className="img-mobile-projects">
      <img src={imgCronometro} className="cronometro-img-mobile"></img>
      <h1> Cronometro </h1>
      <p> Aplicativo desenvolvido em React Native, aplicativo é um cronometro que salva o tempo quando pausado. </p>
      <a href="https://github.com/VtaZinn/CronometroReactNative" target="blank" className="gitTextDecoration">
          <div className="data-GitHub">
              GitHub
          </div>
      </a>
    </div>
  </div>

  <div className="content-mobile-projects">
    <div className="img-mobile-projects">
      <img src={imgPsicologa} className="cronometro-img-mobile"></img>
      <h1> Isabela Teixeira </h1>
      <p> Landing Page desenvolvida com HTML,CSS e JavaScript <br/> para a cliente Isabela Teixeira. </p>
      <a href="https://psicologaisabelateixeira.com.br/" target="blank" className="gitTextDecoration">
        <div className="data-Site">
          SITE
        </div>
      </a>
    </div>
  </div>
</div>
</div>
  );
}

export default Projects;