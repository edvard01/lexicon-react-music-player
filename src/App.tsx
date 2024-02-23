import { CurrentlyPlaying } from "./CurrentlyPlaying";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Playlist } from "./Playlist";

export function App(): JSX.Element {
  const [currentSong, setCurrentSong] = useState<string>("Song Title");
  const [currentArtist, setCurrentArtist] = useState<string>("Artist");

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
