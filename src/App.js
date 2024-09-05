import { Route, Routes } from "react-router-dom";
import ProfileUsua from "./pages/ProfileUsua";
import CalendarioUsuario from "./pages/CalendarioUsuario";
import ProgramacionUsua from "./pages/ProgramacionUsua";
import Informes1 from "./components/Informes1";
import Usuarios1 from "./components/Usuarios1";
import ProfileAdmin from "./components/ProfileAdmin";
import CalendarioAdministrador from "./pages/CalendarioAdministrador";



function App() {
  return (
    <div className=" App">
      <>
        <Routes>
          <Route path="/profileUsua" element={<ProfileUsua/>} />
          <Route path="/calendarioausua" element={<CalendarioUsuario/>} />
          <Route path="/programacionesUsua" element={<ProgramacionUsua/>} />
          <Route path="/informes" element={<Informes1/>} />
          <Route path="/usuarios" element={<Usuarios1/>} />
          <Route path="/perfilAdmin" element={<ProfileAdmin/>} />
          <Route path="/calendarioadmin" element={<CalendarioAdministrador/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;