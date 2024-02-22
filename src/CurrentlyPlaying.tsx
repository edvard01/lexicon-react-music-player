import "./currentlyPlaying.css";

export function CurrentlyPlaying(): JSX.Element {
  return (
    <>
      <div className="currently-playing">
        <div className="content">
          <img src="src\assets\WageWarManic.jpg" alt="album cover" />

          <div className="song-info">
            <span className="material-symbols-outlined"> add_circle </span>
            <span className="text-area">
              <h4>Song Title</h4>
              <p>Album name</p>
            </span>
            <span className="material-symbols-outlined"> favorite </span>
          </div>
          <div className="progress">
            <p>0:00</p>
            <span className="progress-area">
              <div className="progress-bar"></div>
              <div className="progress-bar-bg"></div>
            </span>
            <p>4:29</p>
          </div>
          <div className="nav-buttons">
            <span className="material-symbols-outlined"> repeat </span>
            <span>
              <span className="material-symbols-outlined"> skip_previous </span>
              <span className="material-symbols-outlined"> play_circle </span>
              <span className="material-symbols-outlined"> skip_next </span>
            </span>
            <span className="material-symbols-outlined"> shuffle </span>
          </div>
        </div>
      </div>
    </>
  );
}
