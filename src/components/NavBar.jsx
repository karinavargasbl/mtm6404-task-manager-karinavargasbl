function NavBar({ children }) {
  return (
    <nav className="navbar">
      <h2>💎 Del Mar Gems 💖</h2>
      <ul className="nav-links">{children}</ul>
    </nav>
  );
}

export default NavBar;
