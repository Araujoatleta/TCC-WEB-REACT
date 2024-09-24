import React from 'react';
import './Cadastro.css'; // Estilos específicos de cadastro

function Cadastro() {
  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;