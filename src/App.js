import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Producto from "./pages/Producto";
import Industrial from "./pages/Industrial";
import Gestion from "./pages/Gestion";
import Personas from "./pages/Personas";
import Documentos from "./pages/Documentos";
import Nosotros from "./pages/Nosotros";
import Pilares from "./pages/Pilares";
import Certificaciones from "./pages/Certificaciones";
import Equipo from "./pages/Equipo";
import Acreditaciones from "./pages/Acreditaciones";
import Proyectos from "./pages/Proyectos";
import Politicas from "./pages/Politicas";
import "./index.css";
import Clientes from "./pages/Clientes";
import Cotizacion from "./pages/Cotizacion";
import NavBar from "./pages/Navbar";
import Footer from "./components/Footer";
import FloatingBtn from "./components/FloatingBtn";
import ScrollToTop from "./components/ScrollToTop";
import DetallesServicios from "./pages/DetallesServicios";
import PoliticasNavegacion from "./pages/PoliticasNavegacion";
import ButtonToTop from "./components/ButtonToTop";
import Cookie from "./components/Cookie";
import Cookies from "js-cookie";


function App() {

  // variables to url component
  const gestion = "gestion";
  const producto = "producto";
  const industriales = "industriales";
  const personas = "personas";

  //Button scroll to top........................
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //Button scroll to top........................

  //Check if the cookie exist...................
  const [getCookie, setGetCookie] = useState(false)

  useEffect(() => {
    const cookieValue = Cookies.get('itic');
    if (cookieValue) {
      setGetCookie(true)
    } else {
      setGetCookie(false)
    }
  }, []);
  //Check if the cookie exist..................



  return (
    <>
      <GlobalStyles />
      <Router>


        <NavBar />
        <FloatingBtn />
        <ScrollToTop />
        {showButton && <ButtonToTop />}
        {getCookie === true ? '' : showButton && <Cookie />} 

        <Routes>
          <Route path="*" element={<Navigate to="/Home" />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="/Politicas de Navegacion" element={<PoliticasNavegacion />} />
          <Route path="https//api.whatsapp.com/send?phone=573186396096"element={<FloatingBtn />}/>

          <Route path="/servicios/gestion" element={<Gestion />} />
          <Route path="/servicios/producto" element={<Producto />} />
          <Route path="/servicios/industrial" element={<Industrial />} />
          <Route path="/servicios/personas" element={<Personas />} />
          <Route path="/servicios/documentos" element={<Documentos />} />

          <Route path="/empresa/nosotros" element={<Nosotros />} />
          <Route path="/empresa/documentos" element={<Documentos />} />
          <Route path="/empresa/pilares" element={<Pilares />} />
          <Route path="/empresa/acreditaciones" element={<Acreditaciones />} />
          <Route path="/empresa/certificaciones" element={<Certificaciones />} />
          <Route path="/empresa/equipo" element={<Equipo />} />
          <Route path="/empresa/Nuestras-Experiencias" element={<Clientes />} />
          <Route path="/empresa/proyectos" element={<Proyectos />} />
          <Route path="/empresa/politicas" element={<Politicas />} />


          <Route path="/servicios/gestion/:id" element={<DetallesServicios gestion={gestion} />} />
          <Route path="/servicios/producto/:id" element={<DetallesServicios producto={producto} />} />
          <Route path="/servicios/industrial/:id" element={<DetallesServicios industriales={industriales} />} />
          <Route path="/servicios/personas/:id" element={<DetallesServicios personas={personas} />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;

