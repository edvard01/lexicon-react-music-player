import "./playlist.css";

export function Playlist(): JSX.Element {
  function songClick(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;

    if (target.tagName !== "LI") {
      const newTarget = target.parentElement as HTMLElement;
      const songTitle = newTarget.querySelector("#song-title")?.innerHTML;
      const songAuthor = newTarget.querySelector("#song-author")?.innerHTML;

      console.log(songTitle, " - Title");
      console.log(songAuthor, " - Author");
    } else {
      const songTitle = target.querySelector("#song-title")?.innerHTML;
      const songAuthor = target.querySelector("#song-author")?.innerHTML;

      console.log(songTitle, " - Title");
      console.log(songAuthor, " - Author");
    }

    console.log(target);
  }
  return (
    <>
      <div className="playlist">
        <ul onClick={songClick}>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">Relapse</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">Teeth</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">Manic</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">High Horse</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">Circle The Drain</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">Godspeed</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">Death Roll</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">Slow Burn</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">Never Said Goodbye</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">True Colors</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
          <li>
            <div className="li-content">
              <img src="src\assets\WageWarManic.jpg" alt="IMG" />
              <span className="song-text">
                <h4 id="song-title">If Tomorrow Never Comes</h4>
                <p id="song-author">Wage War</p>
              </span>
              <span className="material-symbols-outlined"> play_circle </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
