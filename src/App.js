import { Route, Routes } from "react-router-dom";
import ProfileUsua from "./pages/ProfileUsua";
import CalendarioUsuario from "./pages/CalendarioUsuario";
import ProgramacionUsua from "./pages/ProgramacionUsua";



function App() {
  return (
    <div className=" App">
      <>
        <Routes>
          <Route path="/Perfil" element={<ProfileUsua/>} />
          <Route path="/Calendario" element={<CalendarioUsuario/>} />
          <Route path="/Programacion" element={<ProgramacionUsua/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;