import AnimeGirl from "./components/anime-girl/anime-girl";

// The app function
function App() {
  // Returning
  return (
    // THe main div
    <div
      className="h-screen bg-center flex flex-col md:flex-row justify-start items-center"
      style={{
        backgroundImage: `url(/imgs/sparkle.png), linear-gradient(to bottom, #9B59B6, #BA55D3, #FFB6C1)`,
        backgroundSize: "200px, cover", 
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "center, center",
      }}
    >
      <AnimeGirl />
    </div>
  );
}

export default App;