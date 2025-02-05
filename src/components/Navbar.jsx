import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./Navbar.css";

export default function Navbar() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user.displayName || user.email);
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleCerrarSesion = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/jugar">Jugar</Link>
        </div>
        <div className="usuario-container">
          {usuario ? (
            <>
              <span className="usuario">Bienvenido, {usuario}!</span>
              <button onClick={handleCerrarSesion} className="logout-btn">
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Iniciar Sesión</Link>
              <Link to="/registro">Registro</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}