import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir al inicio
import { auth } from "./firebase.js"; // Asegúrate de que la ruta esté bien
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function FormRegistro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate();

  const registrar = async (e) => {
    e.preventDefault();
    setError(""); // Limpia errores previos
    setSuccessMessage(""); // Limpia mensajes previos
    try {
      // Crear el usuario con email y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Actualizar el nombre del usuario
      await updateProfile(user, { displayName: name });

      // Mostrar mensaje de éxito con el nombre
      setSuccessMessage(`¡Bienvenido, ${name}! Registro exitoso.`);
      setTimeout(() => navigate("/"), 2000); 
    } catch (err) {
      console.error("Error al registrar:", err.message);
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("El correo electrónico ya está registrado.");
          break;
        case "auth/invalid-email":
          setError("El correo electrónico no es válido.");
          break;
        case "auth/weak-password":
          setError("La contraseña debe tener al menos 6 caracteres.");
          break;
        default:
          setError("Error al registrar: " + err.message);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Registro</h2>
      <form onSubmit={registrar} style={styles.form}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Registrarse</button>
      </form>
      {successMessage && <p style={styles.success}>{successMessage}</p>} {/* Mensaje con el nombre del usuario */}
      {error && <p style={styles.error}>{error}</p>} {/* Mensaje de error */}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #e0f7fa, #80deea)",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#00796b",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px",
    backgroundColor: "#00796b",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
  success: {
    marginTop: "10px",
    color: "#388e3c",
    fontWeight: "bold",
  },
  error: {
    marginTop: "10px",
    color: "#d32f2f",
    fontWeight: "bold",
  },
};
