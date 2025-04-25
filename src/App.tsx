import React from 'react';
import './style/main.css';

import Navbar from './components/navbar';
import Aligner from './components/aligner';
import SamllCard from './components/smallCard';
import PlanCard from './components/planCard';

import bannerTopo from './img/bannersite 2.png';
import cloudIcon from './img/cloudIcon.svg';
import headsetIcon from './img/headsetIcon.svg';
import signalIcon from './img/signalIcon.svg';
import shieldIcon from './img/shieldIcon.svg';

import cardSports from './img/cardSports.svg';
import cardFilms from './img/cardFilms.svg';
import cardSeries from './img/cardSeries.svg';

import logoPremiere from './img/logoPremiere.svg';
import logoSporTV from './img/logoSportv.svg';
import logoGloboplay from './img/logoGloboplay.svg';
import logoNetflix from './img/logoNetflix.svg';
import logoCup from './img/logoCup.svg';

import astronautImg from './img/astronaut.svg';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <img src={bannerTopo} alt="banner-topo" className="banner-topo" />

      <Aligner direction="horizontal">
        <SamllCard iconPath={cloudIcon} message="Instalação com roteador grátis."/>
        <SamllCard iconPath={headsetIcon} message="Suporte personalizado, 24 horas por dia."/>
        <SamllCard iconPath={signalIcon} message="Wi-fi que pega na casa toda!"/>
        <SamllCard iconPath={shieldIcon} message="Navegação rápida e segura."/>
      </Aligner>

      <Aligner direction="horizontal">
        <b className="middle-title">
          Conheça nosso App de canais!
        </b>
      </Aligner>

      <Aligner direction="horizontal" background="bg1">
        <Aligner direction="horizontal">
          <img src={cardSports} alt="card-sports" className="card" />
          <img src={cardFilms} alt="card-films" className="card" />
          <img src={cardSeries} alt="card-series" className="card" />
        </Aligner>
        <Aligner direction="vertical" justify='center'>
          <b className="billboard-title">Mais de 2000 canais</b>
          <div className="horizontal-title">
            <span>por apenas R$</span>
            <b>29</b>
            <span>,99/mês</span>
          </div>
          <a 
            href="https://api.whatsapp.com/send?phone=%205579998981717&text=Olá%2C+gostaria+de+saber+mais+sobre+os+serviços+de+Canais+e+Internet+oferecidos+no+site%21"
            target="_blank"
            className="subscribe-button">
              clique aqui e assine
          </a>
          <Aligner direction="horizontal">
            <img src={logoPremiere} alt="icon-channel" className="icon-channel" />
            <img src={logoSporTV} alt="icon-channel" className="icon-channel" />
            <img src={logoGloboplay} alt="icon-channel" className="icon-channel" />
            <img src={logoNetflix} alt="icon-channel" className="icon-channel" />
            <img src={logoCup} alt="icon-channel" className="icon-channel" />
          </Aligner>
        </Aligner>
      </Aligner>

      <Aligner direction="horizontal">
        <b className="middle-title">
          <br /><br />
          Conheça nossos planos!
        </b>
      </Aligner>

      <Aligner direction="horizontal" justify='center'>
        <PlanCard potency={100} price={69} />
        <PlanCard potency={200} price={79} />
        <PlanCard potency={300} price={99} observation='Com App de canais incluso!' />
      </Aligner>

      <Aligner direction="horizontal" justify='center'>
        <img src={astronautImg} alt="astronaut-img" className="astronaut-img" />

        <Aligner direction="vertical">
          <b className='test-text'>Teste sua Velocidade</b>
          <a href="#" target="_blank" rel="noopener noreferrer" className='test-button'>
            Clique aqui para fazer o teste
          </a>
          <small className='test-obs'>Uma nova aba abrirá no seu navegador</small>
        </Aligner>
      </Aligner>

      <Footer/>

    </React.Fragment>
  );
}

export default App;
