import React from "react";
import imgVictor from '../image/imgVictor.jpeg';
import './home.css'

function Home() {
  return(
  <div className="animationHome">
    <div className="content-home">
      <div className="content-img">
        <img src={imgVictor} className="imgVictor"></img>
      </div>
      <div className="content-text-presentation">
        <h2> Olá, eu sou Victor Augusto </h2>
        <h1 className="content-title-developer"> Desenvolvedor Web </h1>
      </div>
      <div className="content-technology">
        <h1 className="text"> #REACT #PYTHON #JAVASCRIPT #CSS3 #HTML5 </h1>
      </div>
    </div>
  </div>
  );
}

export default Home;