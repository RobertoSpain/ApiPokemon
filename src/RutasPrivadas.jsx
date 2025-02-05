import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 

export default function RutasPrivadas() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Usuario:", user);
      if (user) {
        setUsuario(user.uid); 
        console.log("Usuario activo:", user.displayName);
      } else {
        setUsuario(null); 
        console.log("CIERRA SESIÓN");
      }
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, []);

  if (loading) {
    return <p>Cargando...</p>; 
  }

  return usuario ? <Outlet /> : <Navigate to="/login" />;
}