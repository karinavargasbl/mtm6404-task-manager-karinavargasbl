function NavBar({ onNavClick, children }) {
  return (
    <nav className="navbar">
      <img src="src/assets/DEL-MAR-GEMS-LOGO.png" alt="Logo" className="logo-img" />
      {children}
      <ul className="nav-links">
        <li onClick={() => onNavClick('Tasks')}>Tasks</li>
        <li onClick={() => onNavClick('Status')}>Status</li>
        <li onClick={() => onNavClick('Reports')}>Reports</li>
      </ul>
    </nav>
  );
}

export default NavBar;

