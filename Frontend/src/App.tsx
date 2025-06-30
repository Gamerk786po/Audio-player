import AnimeGirl from "./components/anime-girl/anime-girl";
import Player from "./components/music-player/player";

// The app function
function App() {
  // Returning
  return (
    // THe main div
    <div
      className="lg:h-screen h-[100%] bg-center flex flex-col md:flex-row justify-start items-center"
      style={{
        backgroundImage: `url(/imgs/sparkle.png), linear-gradient(to bottom, #9B59B6, #BA55D3, #FFB6C1)`,
        backgroundSize: "200px, cover", 
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "center, center",
      }}
    >
      <AnimeGirl />
      <Player />
    </div>
  );
}

export default App;