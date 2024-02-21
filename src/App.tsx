import { CurrentlyPlaying } from "./CurrentlyPlaying";
import { Navbar } from "./Navbar";
import { Playlist } from "./Playlist";

export function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="content">
        <Playlist />
        <CurrentlyPlaying />
      </div>
    </>
  );
}
