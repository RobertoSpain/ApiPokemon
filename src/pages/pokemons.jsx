import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pokemons() {
  const [listaPokemons, setListaPokemons] = useState([]);
  const [urlPokeAPI, setURLPokeAPI] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=8"
  );

  useEffect(() => {
    cargarPokemones();
  }, []);

  const cargarPokemones = async () => {
    if (!urlPokeAPI) return;

    try {
      const response = await fetch(urlPokeAPI);
      const datosAPI = await response.json();

      // Filtrar duplicados y actualizar la lista directamente
      setListaPokemons((prevLista) => [
        ...prevLista,
        ...datosAPI.results.filter(
          (nuevoPokemon) =>
            !prevLista.some(
              (pokemonExistente) => pokemonExistente.name === nuevoPokemon.name
            )
        ),
      ]);
      setURLPokeAPI(datosAPI.next); // Actualizar URL para la siguiente página
    } catch (error) {
      console.error("Error al cargar los Pokémon:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Título */}
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Lista de Pokémons</h1>

      {/* Lista de Pokémon */}
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyleType: "none",
          padding: 0,
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {listaPokemons.map((pokemon, index) => {
          const id = pokemon.url.split("/")[pokemon.url.split("/").length - 2]; 
          return (
            <li
              key={index}
              style={{
                textAlign: "center",
                width: "12%", // Ajuste para mostrar 8 por fila
                background: "#f8f8f8",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Link
                to={`/detalle/${id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={`Imagen de ${pokemon.name}`}
                  style={{
                    width: "120px",
                    height: "120px",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginTop: "5px",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {pokemon.name.toUpperCase()}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Botón para cargar más Pokémon */}
      {urlPokeAPI && (
        <button
          onClick={cargarPokemones}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#2a9d8f",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          Cargar más
        </button>
      )}
    </div>
  );
}
