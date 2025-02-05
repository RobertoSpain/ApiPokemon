import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./DetallePokemon.css";

export default function DetallePokemon() {
  const { idPokemon } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.error("Error:", err))
      .finally(() => setLoading(false));
  }, [idPokemon]);

  if (loading) return <p>Cargando detalles...</p>;
  if (!pokemon) return <p>No se encontraron detalles para este Pokémon.</p>;

  const { name, height, weight, types, abilities, sprites } = pokemon;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="cerrar-modal" onClick={() => navigate(-1)}>✖</button>
        <h1 className="detalle-nombre">{name.toUpperCase()}</h1>
        <img src={sprites.other["official-artwork"].front_default} alt={name} className="detalle-imagen" />
        <p><strong>Altura:</strong> {height / 10} m</p>
        <p><strong>Peso:</strong> {weight / 10} kg</p>
        <p><strong>Tipos:</strong> {types.map((t) => t.type.name).join(", ")}</p>
        <p><strong>Habilidades:</strong> {abilities.map((a) => a.ability.name).join(", ")}</p>
      </div>
    </div>
  );
}
