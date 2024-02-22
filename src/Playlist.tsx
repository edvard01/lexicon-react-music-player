import "./playlist.css";

export function Playlist(): JSX.Element {
  return (
    <>
      <div className="playlist">
        <ul>
          <li>
            <img src="src\assets\WageWarManic.jpg" alt="IMG" />
            <span className="song-text">
              <h4>Song Title</h4>
              <p>artist</p>
            </span>
            <span className="material-symbols-outlined"> play_circle </span>
          </li>
        </ul>
      </div>
    </>
  );
}
