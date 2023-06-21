import './App.css';
import Home from './components/home';
import arrowDown from './image/arrowDown.png';
import menuImg from './image/menu.png'
import Menu from './components/menu'
import AboutMe from './components/aboutMe'
import upArrow from './image/arrowUp.png'
import Projects from './components/projects';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('Home');

  const getInfo = (currentScreen) =>{
    let Info = {
      title: 'Inicio',
      number: '01. ',
      buttonUpTitle: 'Sobre mim',
      buttonUpClick: 'AboutMe',
      buttonDownTitle: 'Meus Projetos',
      buttonDownClick: 'Projects',
    }

    if(currentScreen == 'Projects'){
      Info = {
        title: 'Projetos',
        number: '02. ',
        buttonUpTitle: 'Inicio',
        buttonUpClick: 'Home',
        buttonDownTitle: 'Sobre mim',
        buttonDownClick: 'AboutMe',
      }
    }

    if(currentScreen == 'AboutMe'){
      Info = {
        title: 'Sobre',
        number: '03. ',
        buttonUpTitle: 'Meus Projetos',
        buttonUpClick: 'Projects',
        buttonDownTitle: 'Inicio',
        buttonDownClick: 'Home',
      }
    }
    if(currentScreen == 'Menu'){
      Info = {
        title: 'Menu',
      }
    }

    console.log(Info)
    return Info;
  }

  return (
    <div className="App">
      {screen != 'Menu' && <div className="Up" onClick={() => setScreen(getInfo(screen).buttonUpClick)}>
        <div className="content-up">
          <img src={upArrow} className="img-upArrow" />
          {getInfo(screen).buttonUpTitle}
        </div>
      </div>}

      <div class="menu-display-flex"> 
        <button className='menu-img' onClick={()=> setScreen('Menu')}><img src={menuImg}/></button>
        <p> {getInfo(screen).number} </p>
        <p> {getInfo(screen).title} </p>
      </div>

      
      <div className="content">
        {screen == 'Menu' && <Menu onClick={setScreen}/>}
        {screen == 'Home' && <Home />}
        {screen == 'AboutMe' && <AboutMe />}
        {screen == 'Projects' && <Projects />}

        {screen != 'Menu' &&  <div className='content-button-bottom'  onClick={() => setScreen(getInfo(screen).buttonDownClick)}>
          {getInfo(screen).buttonDownTitle}
          <div className='arrow-bottom'>
            <img src={arrowDown} className='arrow-down'></img>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default App;
