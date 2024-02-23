import { CurrentlyPlaying } from "./CurrentlyPlaying";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Playlist } from "./Playlist";

interface ICurrentlyPlayingProps {
  song: string;
}

export function App(): JSX.Element {
  const [currentSong, setCurrentSong] = useState<string>("");
  const [currentArtist, setCurrentArtist] = useState<string>("");

  const updateCurrentSong = (newSong: string) => {
    setCurrentSong(newSong);
  };

  const updateCurrentArtist = (newArtist: string) => {
    setCurrentArtist(newArtist);
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <Playlist
          updateSong={updateCurrentSong}
          updateArtist={updateCurrentArtist}
        />
        <CurrentlyPlaying song={currentSong} artist={currentArtist} />
      </div>
    </>
  );
}
