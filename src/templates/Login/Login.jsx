
import React from 'react';
import './Login.css'; // Estilos específicos de login

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;