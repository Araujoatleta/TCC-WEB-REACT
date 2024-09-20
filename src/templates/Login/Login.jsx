import { Link, useNavigate } from "react-router-dom";
import './Login.css';
const Login = () => {




    return (
        <div class="wrapper">
    <section>
      <div class="form-box">
        <div class="form-value">
          <form action="">
            <h2>Login</h2>
            <div class="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required/>
              <label for="">Email</label>
            </div>
            <div class="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required/>
              <label for="">Password</label>
            </div>
            <div class="forget">
              <label>
                <input type="checkbox"/> Remember me
              </label>
              <label>
                <a href="../Senha/index.html">Forgot password?</a>
              </label>
            </div>
            <Link to={'/home'}
          className='btn btn-sm btn-warning'>
          Acesso Restrito
        </Link>
            <div class="register">
              <p>Don't have a account ?  <Link to={'/cadastro'}>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
    )
}

export default Login