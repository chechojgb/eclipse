import React, { useEffect } from 'react';
import { Footer, Footer_top } from '../Components/footer.jsx';
import {Historia, Titulo } from '../Components/Historia.jsx'
import { Title_header, Header } from '../Components/Header.jsx';


function History() {
  useEffect(() => {
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallax = document.querySelector('.ParallaxContainer');
      parallax.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="App">
      <Titulo/>
      <div className="ParallaxContainer">
          <h1>Historia</h1>
    </div>

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
      
      <Historia>
      </Historia>

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

export default History;
