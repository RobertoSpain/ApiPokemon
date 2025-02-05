import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js"; 

export default function CerrarSesion() {
  const navigate = useNavigate();

  useEffect(() => {
    const cerrarSesion = async () => {
      try {
        await auth.signOut(); 
        alert("Has cerrado sesión con éxito.");
        navigate("/"); 
      } catch (error) {
        console.error("Error al cerrar sesión:", error.message);
        alert("Hubo un error al cerrar sesión. Inténtalo de nuevo.");
      }
    };

    cerrarSesion(); 
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h2 style={styles.message}>Cerrando sesión...</h2>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #e0f7fa, #80deea)",
  },
  message: {
    fontSize: "1.5rem",
    color: "#00796b",
    fontWeight: "bold",
  },
};
