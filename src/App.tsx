import { CurrentlyPlaying } from "./CurrentlyPlaying";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Playlist } from "./Playlist";

interface ICurrentlyPlayingProps {
  song: string;
}

export function App(): JSX.Element {
  const [currentSong, setCurrentSong] = useState<string>("Initial song");

  function updateCurrentSong(newSong: string) {
    setCurrentSong(newSong);
  }

  return (
    <>
      <Navbar />
      <div className="content">
        <Playlist />
        <CurrentlyPlaying song="If Tomorrow Never Comes" artist="Wage War" />
      </div>
    </>
  );
}
