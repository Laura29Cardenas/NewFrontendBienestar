import React from "react";
import NavbarInsCap from "../components/layout/NavbarInsCap";
import Cardsedeuno from "../components/Cardsedeuno";
import Cardsededos from "../components/Cardsededos";
import CardsedeFontibon from "../components/CardsedeFontibon";

function ProgramacionUsua() {
  return (
    <div >
      <div className="container"> 
      < NavbarInsCap />
      <Cardsedeuno/>
      <Cardsededos/>
      <CardsedeFontibon/>
      </div>
    </div>
  );
}

export default ProgramacionUsua;
