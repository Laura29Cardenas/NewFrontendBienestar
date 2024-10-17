import React from "react";
import NavbarInsCap from "../components/layout/NavbarInsCap";
import Cardsedeuno from "../components/Cardsedeuno";
import Cardsededos from "../components/Cardsededos";
import CardsedeFontibon from "../components/CardsedeFontibon";

function ProgramacionUsua() {
  return (
    <div>
      < NavbarInsCap />
      <div className="card-container">
      <Cardsedeuno/>
      <Cardsededos/>
      <CardsedeFontibon/> 
      </div>
    </div>
  );
}

export default ProgramacionUsua;
