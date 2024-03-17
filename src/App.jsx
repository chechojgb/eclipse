
import './App.css';
import { Title_header, Header } from './Components/Header.jsx';
import { Main, Section, News } from './Components/Main.jsx';
import { Footer, Footer_top } from './Components/footer.jsx';


function App() {
  
  return (
    <div className="App">
      <Title_header title = "Eclipse" image = "logo_prov.jpeg">

        <Header 
          principal_text = "Explora"
          subnavs={["Pagina principal", "Mapas", "Discusiones", "Historia"]}
          links={["/", "hi", "/discusiones", "historia"]}
          />

        <Header 
          principal_text = "Eclipse"
          subnavs = {["Personajes", "Armas", "Enemigos", "Jefes"]}
          links = {["/personajes", "/armas", "/enemigos", "/jefes"]}
        />

        <Header
          principal_text = "Información"
          subnavs = {["Actualizaciones", "Ayuda"]}
          links = {["/actualizaciones", "/ayuda"]}
        />
        
      </Title_header>


      <Main title = "INICIO" 

        // ESTO SON LAS NOTICIAS QUE APARECEN AL LADO DERECHO DEL MAIN
        News={[
          //Comunidad
          <News key="new1" title="Comunidad"><div className='images-all'><a href=""><img src={require(`./images/Discord.png`)} alt="Discord" className='images'/></a></div>
          </News>,
          //Redes sociales
          <News key="new2" title="Nuestras redes sociales "><div className='images-all'>
            <a href=""><img src={require(`./images/twitter.png`)} alt="Twitter" className='images'/></a>
            </div>
          </News>,
          <News
           key="new3"
           title="nuestro facebook"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchillyroomsoulknight&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          />
          //cargar facebook

          
      
        ]}

        >
          <Section key="section1" title="Wiki de Eclipse">
            
            <Section description= "Bienvenido a la Wiki de eclipse donde podras ver todo lo relacionado con el juego como la historia, personajes, guias, actualizaciones y tambien podras descargar el juego desde aca." img="fondo.jpeg" />

          </Section>

          <Section  key="section2" title="Historia">
            <Section history="Nuestro protagonista (Nombre) un joven científico junto a su esposa (Nombre) buscan crear un ambicioso artefacto para viajar entre mundos, tras varios años de investigaciones y arduo trabajo lograron construir esta maquinaria de manera funcional decidiendo así destapar su mejor botella de vino celebrando no solo su triunfo científico, sino también sus sueños compartidos la pareja celebró hasta el anochecer, alrededor de la media noche la pareja decide ir a su casa y justo antes de salir un extraño sonido es emitido desde el artefacto llamando la atención de la pareja decidiendo ir a investigar y de manera sorpresiva el artefacto abre un portal el cual comienza a succionar con una gran fuerza todo lo que se encuentra a su alrededor cada vez con más fuerza a tal punto de succionar a la pareja e implosionando llevándose una parte del laboratorio."/>
          </Section>
          
          
      </Main>

      <Footer rights="Wiki Eclipse tiene todos los derechos reservados" director="Creado por compañia Eclipse" direction="hola.html">

        <Footer_top company="titulo2.png"/>
        <Footer_top title="contactanos"
        li={["Nosotros", "Nuestros servicios", "Politicas de privacidad", "Unete"]}
        />
        <Footer_top title="Ayuda"
        li={["Preguntas", "Errores", "Versiones"]}
        />
        <Footer_top title="Siguenos"
        li={["Preguntas", "Errores", "Versiones"]}
        
        />
        <Footer_top title="Siguenos"
        icon={["fab fa-facebook-f", "fab fa-instagram", "fa-brands fa-x-twitter"]}
        
        />
        

      </Footer>
      
    </div>
    
  );
}

export default App;
