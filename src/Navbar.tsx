import "./navbar.css";

export function Navbar(): JSX.Element {
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <a href="">
            <span className="material-symbols-outlined">chevron_left</span>
          </a>
          <p>Current Playlist</p>
          <a href="">
            <span className="material-symbols-outlined">menu</span>
          </a>
        </div>
      </nav>
    </>
  );
}
