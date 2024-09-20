import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import '../Home/Home.css';
import Logo from '../../assets/images/1.svg'
const Home = () => {

    return (
     <>
     <header>     
     <div class="container">
        <a href="./img/1.svg">
          <img src={Logo} alt="Logo barbearia"/>
        </a>
      </div>
    </header>

    <aside>
      <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          
          <ul class="menu" data-theme='t-orange'>
              <a href="../index-UI.html">
                  <li>Home</li>
              </a>
              <a href="../admin/index.html">
                  <li>Barber Area</li>
              </a>
              
              <a href="#">
                  <li>Desktop</li>
              </a>

              <a href="#">
                  <li>Editar Perfil</li>
              </a>
              <a href="#">
                <li>Relatórios</li>
            </a>

          </ul>
      </div>
  </aside>
  
    <section class="s-hero">
      <div class="container">
        <div class="left-area">
          <h1>Admin Area</h1>
          
          <p> 
            Olá! Esta é a área administrativa do nosso site, aqui você pode gerir sua(s) barbearia(s),
            membros da sua equipe, ver avaliações e etc. 
            Clique em nossa logo presente no canto superior esquerdo para abrir o menu de opções. 
          </p>
            

          </div>  
              </div>

    </section>
    <section class="s-villain">

      <div class="container">
        <img src="../img/imagem.svg" alt=""/>
      </div>

    </section>
    
    <footer>
      <div class="testimonial-container">
        <div class="image-section">
            <img src="../img/footer.png" alt="Depoimento de R10" class="testimonial-image"/>
        </div>

        <h2 class="Depoimento">DEPOIMENTOS</h2>
        <div class="text-section">
            <p class="testimonial-text">"Desde que comecei a parceria com a BC (Barber's Club) nunca mais tive problemas com horários e agendamentos"</p>
            <p class="author">"R10"</p>
            <img src="../img/image-1555.png" alt="aspas"/>
          </div>
</div>
</footer>
      
</>
    )
}

export default Home