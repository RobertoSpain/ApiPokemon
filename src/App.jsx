import "./App.css"; // Estilos globales
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RutasPrivadas from "./RutasPrivadas";
import Inicio from "./Inicio";
import Login from "./Login";
import FormRegistro from "./FormRegistro";
import Pokemons from "./pages/pokemons";
import Jugar from "./pages/jugar";
import CerrarSesion from "./pages/CerrarSesion";
import DetallePokemon from "./components/DetallePokemon";
import Error404 from "./components/error404";
import Navbar from "./components/Navbar";
import Ranking from "./components/Ranking";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<FormRegistro />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/detalle/:idPokemon" element={<DetallePokemon />} />
          <Route path="/cerrar-sesion" element={<CerrarSesion />} />
          <Route path="/ranking" element={<Ranking />} />

          {/* Ruta protegida */}
          <Route element={<RutasPrivadas />}>
            <Route path="/jugar" element={<Jugar />} />
          </Route>

          {/* Ruta no encontrada */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
