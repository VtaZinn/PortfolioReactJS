import React from "react";
import './aboutMe.css'
import imgVictor from '../image/imgVictor.jpeg';

function AboutMe(){
  return(
    <div className="animatioAbout">
    <div className="aboutMe">
      <div> 
        <h1 className="about-name">  Sobre mim </h1>
      </div>

      <div className="about-content-text">
        <div className="about-text-1">
          Muito prazer me chamo Victor Augusto desde 2016 tenho contato com HTML e CSS, mas levava o desenvolvimento web
          como hobbie e um tempo depois decidi me aprofundar nos estudos para trabalhar na área!
        </div>
        <div className="about-text-2">
          Atualmente trabalho de forma autonôma desenvolvendo sites, landing pages e aplicativos com as tecnologias: HTML5, CSS3, JAVASCRIPT,
          REACT JS, REACT NATIVE E PYTHON. Estou em procura de novos desafios profissionais!
        </div>
      </div>

      <div className="about-data">
        <div>
          <img src={imgVictor} className="imgVictorAbout"></img>
        </div>
        <div className="about-data-text">
          São Paulo, Brasil <br/>
          E-mail: augustovta416@gmail.com
          <a href="https://drive.google.com/file/d/12OUB7msm8csBVydbVS-Wp2DR-hxg3qDF/view?usp=sharing" className="textDecoration" target="blank">
          <div className="about-button">
            <button className="about-curriculum-button"> MEU CURRÍCULO </button>
          </div></a>
        </div>
      </div>
      <div className="space"></div>
    </div>
    </div>
  );
}

export default AboutMe;