import React from 'react';
import './Senha.css'; // Estilos específicos de recuperação de senha

function Senha() {
  return (
    <div className="senha-container">
      <h2>Recuperação de Senha</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" />

        <button type="submit">Recuperar Senha</button>
      </form>
    </div>
  );
}

export default Senha;