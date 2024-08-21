import React from "react";
import becas from "../static/img/becas.jpg";
import discapacidad from "../static/img/discapacidad.webp";
import transporte from "../static/img/transporte.jpeg";

function Iniciosection5() {
  return (
    <div>
      <section className="blog container">
        <h2>Programas de Apoyo Financiero</h2>
        <p>
          Bienestar al Aprendiz ofrece una amplia gama de programas de apoyo
          financiero diseñados para asistir a los estudiantes en la cobertura de
          diversos gastos relacionados con su educación y necesidades
          personales. Entre estos programas se encuentran:
        </p>
        <div className="blog-content">
          <div className="blog-1">
            <h3>Becas Académicas</h3>
            <br />
            <img src={becas} alt="becas" />
            <p>
              Estas becas están destinadas a cubrir parcial o totalmente los
              costos de matrícula y materiales educativos. Se otorgan a
              estudiantes con un alto rendimiento académico, necesidad económica
              comprobada o méritos especiales que cumplen con los requisitos
              establecidos para cada beca. Estas becas buscan facilitar el
              acceso a la educación y reducir la carga financiera de los
              estudiantes.
            </p>
          </div>
          <br />
          <hr className="linea" />
          <div className="blog-1">
            <br />
            <h3>Ayudas Económicas </h3>
            <br />
            <img className="bus" src={transporte} alt="transporte" />
            <p>
              Este tipo de apoyo incluye subsidios para gastos relacionados con
              el transporte, alojamiento, y adquisición de materiales
              didácticos. Estas ayudas están dirigidas a estudiantes que
              enfrentan dificultades económicas significativas y necesitan
              asistencia para cubrir gastos adicionales que podrían afectar su
              desempeño académico.
            </p>
          </div>
          <hr className="linea" />
          <div className="blog-1">
            <br />
            <h3>Programas Especiales</h3>
            <br />
            <img src={discapacidad} alt="discapacidad" />
            <p>
              Además de las becas y ayudas generales, Bienestar al Aprendiz
              ofrece programas diseñados para apoyar a grupos específicos de
              estudiantes. Esto incluye ayudas para estudiantes con
              discapacidades, que necesitan ajustes especiales para su
              educación, y programas para aquellos que participan en proyectos
              comunitarios, promoviendo el desarrollo de habilidades y el
              compromiso social.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Iniciosection5;
