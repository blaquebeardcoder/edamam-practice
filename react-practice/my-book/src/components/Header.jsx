import "./css/Header.css"

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">Book App</h1>
      <nav className="app-navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
