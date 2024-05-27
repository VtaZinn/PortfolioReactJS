import React from "react";
import './menu.css'
import { useState } from 'react';

function Menu({onClick}){

  return(
    <div class="animation">
    <div className="content-menu">
      <button className="content-button-menu" onClick={()=> onClick('Home')}>
        <span className="number-button"> 01. </span>
        <span className="text-button"> Inicio </span>
      </button>

      <button className="content-button-menu" onClick={()=> onClick('Projects')}>
        <span className="number-button"> 02. </span>
        <span className="text-button"> Meus Projetos </span>
      </button>

      <button className="content-button-menu" onClick={()=> onClick('AboutMe')}>
        <span className="number-button"> 03. </span>
        <span className="text-button"> Sobre mim </span>
      </button>
    </div>

    <div className="content-data">
      <div className="data-email-cel">
        E-mail: augustovta416@gmail.com <br/>
        Celular: (11) 96439-4048
      </div>
      
      <a href="https://drive.google.com/file/d/12OUB7msm8csBVydbVS-Wp2DR-hxg3qDF/view?usp=sharing" target="blank" className="textDecoration">
      <div className="data-curriculum">
        MEU CURRÍCULO
      </div></a>

      <a href="https://www.linkedin.com/in/victor-augusto-010156297/" target="_blank" className="links">
        <div class="data-nets">
        LINKEDIN
        </div>
      </a>

      <a href="https://github.com/VtaZinn" target="_blank" className="links">
        <div class="data-nets">
          GITHUB
        </div>
      </a>
    </div>
    </div>
  );
}

export default Menu;