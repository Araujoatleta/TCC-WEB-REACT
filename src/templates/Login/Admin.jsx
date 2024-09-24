import React from 'react';
import './Admin.css'; // Estilos específicos para a tela admin

function Admin() {
  return (
    <div className="admin-container">
      <h2>Área Administrativa</h2>
      <form>
        <label htmlFor="usuario">Usuário:</label>
        <input type="text" id="usuario" name="usuario" />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Admin;