
import React from 'react';
import logo from '../img/logo-barbers-club.svg'; // Caminho para imagem

function Header() {
  return (
    <header>
      <div className="container">
        <a href="#">
          <img src={logo} alt="Logo barbearia" />
        </a>
        <a href="./Login/index.html" className="btn desktop">Admin</a>
      </div>
    </header>
  );
}

export default Header;