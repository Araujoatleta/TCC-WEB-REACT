import { Link} from "react-router-dom";
import './Cadastro.css';
const Login = () => {

    return (
     <div class="wrapper">
    <section>
      <div class="form-box">
        <div class="form-value">
          <form action="">
            <h2>Cadastre-se</h2>
            <div class="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input type="email" required  />
              <label for="">Email</label>
            </div>
            <div class="inputbox">
              <ion-icon name="name"></ion-icon>
              <input type="nome" required />
              <label for="">Nome e Sobrenome</label>
            </div>
            <div class="inputbox">
              <input type="number" required />
              <label for="">CNPJ</label>
            </div>
            <div class="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input type="password" required />
              <label for="">Password</label>
            </div>
            <div class="forget">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button>Log in</button>
            <div class="register">
              if have a account ? <Link to="/Login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
 )
}

export default Login