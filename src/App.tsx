import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Lista } from "./components/Lista";
import { NuevoEmpleado } from "./components/NuevoEmpleado";
import { EditarEmpleado } from "./components/EditarEmpleado";
import Header from "./components/header";


function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/nuevoempleado" element={<NuevoEmpleado />} />
        <Route path="/editarempleado/:id" element={<EditarEmpleado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
