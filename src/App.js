import { Route, Routes } from "react-router-dom";
import ProfileUsua from "./pages/ProfileUsua";
import CalendarioUsuario from "./pages/CalendarioUsuario";
import ProgramacionUsua from "./pages/ProgramacionUsua";
import Informes from "./pages/Informes";
import Usuarios from "./pages/Usuarios";
import PerfilAdmin from "./pages/PerfilAdmin";
import ProgramacionAdmin from "./pages/ProgramacionAdmin";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import CalendarioAdmin from "./pages/CalendarioAdmin";
import RestaurarClave from "./pages/RestaurarClave";
import Cambiarcla from "./pages/Cambiarcla";

function App() {
  return (
    <div className=" App">
      <>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Inicio/>} />
          <Route path="/profileUsua" element={<ProfileUsua/>} />
          <Route path="/calendariousua" element={<CalendarioUsuario/>} />
          <Route path="/programacionesUsua" element={<ProgramacionUsua/>} />
          <Route path="/informes" element={<Informes/>} />
          <Route path="/usuarios" element={<Usuarios/>} />
          <Route path="/perfilAdmin" element={<PerfilAdmin/>} />
          <Route path="/programacionAdmin" element={<ProgramacionAdmin/>} />
          <Route path="/CalendarioAdmin" element={<CalendarioAdmin />} />
          <Route path="/RestaurarClave" element={<RestaurarClave />}/>
          <Route path="/Cambiarclave" element={<Cambiarcla />}/>
        </Routes>
      </>
    </div>
  );
}

export default App;