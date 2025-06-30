// Importing necessary hooks
import { useRef, useState, ChangeEvent } from "react";
// The component for the player
const Player = () => {
  // Statemanagement for file info
  const [fileName, setFileName] = useState<string>("");
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  // Reference for the file
  const mediaRef = useRef<HTMLAudioElement | HTMLVideoElement | null>(null);
  // Function for file changing
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const url = URL.createObjectURL(file);
    setFileURL(url);
    setIsVideo(file.type.startsWith("video"));
  };
  //   Fucntion for playing the video
  const playMedia = () => {
    mediaRef.current?.play();
  };
  // Function for pausing
  const pauseMedia = () => {
    mediaRef.current?.pause();
  };
  // Returning the component
  return (
    // The main div
    <div className="min-h-screen flex flex-col font-bold gap-10 items-center justify-center px-4">
      {/* The main heading */}
      <h1 className="text-white text-4xl lg:text-6xl md:hidden lg:inline">Play Your Vibe</h1>
      {/* The div containg the add audio button */}
      <div className="flex flex-col items-center gap-4">
        <input
          id="fileUpload"
          type="file"
          accept="audio/*,video/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileUpload"
          className="bg-white text-purple-700 px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-purple-100 transition duration-300"
        >
          🎵 Upload Audio/Video
        </label>

        {fileName && (
          <span className="text-sm text-white italic">
            Selected: {fileName}
          </span>
        )}
      </div>
      {/* The output of video or audio */}
      {fileURL && (
        <div className="flex flex-col items-center gap-4">
          {isVideo ? (
            <video
              ref={mediaRef as React.RefObject<HTMLVideoElement>}
              src={fileURL}
              controls
              autoPlay loop 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          ) : (
            <audio
              ref={mediaRef as React.RefObject<HTMLAudioElement>}
              src={fileURL}
              controls
              autoPlay loop 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          )}
          {/* Div for playing button */}
          <div className="flex gap-4">
            <button
              onClick={playMedia}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              ▶️ Play
            </button>
            {/* button for pausing */}
            <button
              onClick={pauseMedia}
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
            >
              ⏸ Pause
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
