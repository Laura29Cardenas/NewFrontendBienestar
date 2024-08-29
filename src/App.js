import { Route, Router, Routes } from "react-router-dom";
import Informes from "./pages/Informes";
import PerfilAdmin from "./pages/PerfilAdmin";



function App() {
  return (
    <div className=" App">
      <>
        <Routes>
          <Route path="/Informes" element={<Informes/>} />
          <Route path="/PerfilAdmin" element={<PerfilAdmin/>} />
        </Routes>
      </>
    </div>
  );
}

export default App;