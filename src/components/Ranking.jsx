import { useState, useEffect } from "react";
import { db } from "../firebase"; // Asegúrate de que la ruta sea correcta
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import "./Ranking.css";

export default function Ranking() {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarRankings() {
      try {
        console.log("Iniciando consulta a Firestore...");
        // Referencia a la colección "rankings"
        const rankingsRef = collection(db, "rankings");
        // Crear la consulta: ordena por "puntos" descendente y limita a 10 resultados
        const q = query(
          rankingsRef,
          orderBy("puntos", "desc"),
          limit(10)
        );
        // Obtener los documentos que cumplen la consulta
        const querySnapshot = await getDocs(q);
        console.log("QuerySnapshot recibido:", querySnapshot);

        // Mapear los documentos a un array de objetos
        const datosRankings = querySnapshot.docs.map((doc) => {
          console.log("Documento obtenido:", doc.id, doc.data());
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log("Datos mapeados:", datosRankings);
        setRankings(datosRankings);
      } catch (error) {
        console.error("Error al cargar los rankings:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarRankings();
  }, []);

  if (loading) {
    return <p>Cargando el ranking...</p>;
  }

  return (
    <div className="ranking-container">
      <h1 className="ranking-titulo">Ranking de Puntuaciones</h1>
      {rankings.length > 0 ? (
        <table className="ranking-tabla">
          <thead>
            <tr>
              <th>Posición</th>
              <th>Usuario</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((ranking, index) => (
              <tr key={ranking.id}>
                <td>{index + 1}</td>
                <td>{ranking.nombre}</td>
                <td>{ranking.puntos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay puntuaciones registradas aún.</p>
      )}
    </div>
  );
}
