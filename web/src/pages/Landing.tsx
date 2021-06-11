import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/pages/landing.css';

import logoImg from '../images/Logo.png'

function Landing() {
  return (
      <div id="page-landing">
          <div className="content-wrapper">
              <img src={logoImg} alt="Happy" />

              <main>
                  <h1>Doe Sangue, Doe Vida!</h1>
                  <p>Conheça os centros de doação da região.</p>
              </main>

              <div className="location">
                  <strong>Minas Gerais</strong>
                  <span>Alfenas</span>
              </div>

              <Link to="/app" className="enter-app">
                  <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
              </Link>
          </div>
      </div>
  )
}

export default Landing;