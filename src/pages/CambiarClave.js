import React from "react";
import { useParams } from "react-router-dom"; // Para capturar los parámetros de la URL
import Cambiarclave from "../components/Cambiarclave"; // Importa correctamente

function Cambiarcla() {
    const { token } = useParams(); // Captura el token desde la URL
    return <Cambiarclave token={token} />; // Pasa el token al componente
}
 
export default Cambiarcla;


