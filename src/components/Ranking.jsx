import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import "./Ranking.css";

export default function Ranking() {
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarRankings() {
      try {
        const q = query(
          collection(db, "rankings"),
          orderBy("puntos", "desc"),
          limit(10) 
        );
        const querySnapshot = await getDocs(q);
        const datosRankings = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRankings(datosRankings);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los rankings:", error);
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
