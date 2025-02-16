import "./App.css"; // Mantén los estilos en este archivo

export default function Inicio() {
  return (
    <div
      className="landing-container"
      style={{ backgroundImage: 'url("/path/to/background-image.jpg")' }}
    >
      <header className="landing-header">
        <h1 className="landing-title">¡Bienvenido a la PokeApi!</h1>
        <p className="landing-subtitle">
          Regístrate y prueba nuestro juego interactivo de Adivinar Pokémons con pistas y sonidos.
        </p>
      </header>

      <div className="video-container">
        <img src="/gengar.png" alt="Gengar" className="wallpaper" />
      </div>

      <section className="landing-content">
        <div className="landing-feature">
          <h3>Explora la Pokedex</h3>
          <p>Descubre las características de todos los Pokemons hasta la novena generación.</p>
          <button
            className="cta-button"
            onClick={() => {
              window.location.href = "/pokemons";
            }}
          >
            Pokedex
          </button>
        </div>
      </section>

      <footer className="landing-footer"></footer>
    </div>
  );
}
