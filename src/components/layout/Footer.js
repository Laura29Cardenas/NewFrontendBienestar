import React from "react";
import { Link } from "react-router-dom";   

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container-index">
          <div className="row">
            <div className="footer-col">
              <h4> Descubrir</h4>
              <ul>
                <li>
                  <Link to="https://www.sena.edu.co/es-co/ciudadano/Paginas/certificadosConstancias.aspx">
                    Certificados
                  </Link>
                </li>
                <li>
                  <Link to="https://portal.senasofiaplus.edu.co/index.php/cronograma">
                    Cronogramas 2024
                  </Link>
                </li>
                <li>
                  <Link to="https://portal.senasofiaplus.edu.co/index.php/seguridad/politica-de-confidencialidad">
                    Política de Seguridad y Confidencialidad
                  </Link>
                </li>
                <li>
                  <Link to="https://sciudadanos.sena.edu.co/SolicitudIndex.aspx">
                    PQRSD
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Sobre SENA</h4>
              <ul>
                <li>
                  <Link to="https://www.sena.edu.co/es-co/trabajo/Paginas/busqueEmpleo.aspx">
                    Empleos
                  </Link>
                </li>
                <li>
                  <Link to="https://www.sena.edu.co/es-co/sena/paginas/quienessomos.aspx">
                    Sobre SENA{" "}
                  </Link>
                </li>
                <li>
                  <Link to="https://www.sena.edu.co/es-co/Empresarios/Paginas/contratoAprendizaje.aspx">
                    Contrato de Aprendizaje
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Pongase en contacto con nosotros</h4>
              <ul>
                <li>
                  <Link to="https://www.sena.edu.co/es-co/transparencia/paginas/mecanismoscontacto.aspx">
                    Canales de atención
                  </Link>
                </li>
                <li>
                  <Link to="https://www.sena.edu.co/es-co/sena/Paginas/directorio.aspx">
                    Directorio
                  </Link>
                </li>
                <li>
                  <Link to="https://www.sena.edu.co/es-co/ciudadano/Paginas/chat.aspx">
                    Chat en Linea
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Siga nuestras redes sociales</h4>
              <div className="social-links">
                <Link to="https://x.com/bcenigraf?lang=es">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="https://www.instagram.com/bienestarccys/">
                  <i className="fab fa-instagram" />
                </Link>
                <Link to="https://www.youtube.com/@bienestaralaprendizcgmlti9181">
                  <i className="fab fa-youtube" />
                </Link>
                <Link to="https://www.tiktok.com/@vivebienestarsena">
                  <i className="fab fa-tiktok" />
                </Link>
              </div>
            </div>
          </div>
        </div> 
      </footer>
    </div>
  );
}

export default Footer;
