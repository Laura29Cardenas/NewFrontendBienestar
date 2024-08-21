import React from "react";
import NavbarInicio from "../components/layout/NavbarInicio";
import Iniciosection1 from "../components/Iniciosection1";
import Iniciosection2 from "../components/Iniciosection2";
import Iniciosection3 from "../components/Iniciosection3";
import Iniciosection4 from "../components/Iniciosection4";
import Iniciosection5 from "../components/Iniciosection5";
import Footer from "../components/layout/Footer";

function Inicio() {
  return (
    <div>
      <NavbarInicio />
      <Iniciosection1 />
      <Iniciosection2 />
      <Iniciosection3 />
      <Iniciosection4 />
      <Iniciosection5 />
      <Footer />
    </div>
  );
}

export default Inicio;
