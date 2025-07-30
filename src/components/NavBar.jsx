// src/components/NavBar.jsx
import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import logo from '../assets/DEL-MAR-GEMS-LOGO.png';

function NavBar() {
  const { lists, activeListId, setActiveListId } = useContext(TaskContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleListClick = (id) => {
    setActiveListId(id);
    navigate(`/list/${id}`);
  };

  const goBack = () => {
    navigate(-1); // Vuelve a la página anterior
  };

  const goToReports = () => {
    navigate('/reports');
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo-img" />

      <h2>Gem Organizer</h2>

      <ul className="nav-links">
        {location.pathname === '/reports' && (
          <li
            onClick={goBack}
            className="btn-back"
            style={{
              cursor: 'pointer',
              color: 'white',
              borderRadius: '25px',
              padding: '0.5rem 1rem',
              marginRight: '0.3rem',
              userSelect: 'none',
            }}
          >
            ← Back
          </li>
        )}

        {location.pathname !== '/reports' && lists.map(list => (
          <li
            key={list.id}
            onClick={() => handleListClick(list.id)}
            style={{
              cursor: 'pointer',
              backgroundColor: list.id === activeListId ? '#3b82f6' : 'transparent',
              color: list.id === activeListId ? 'white' : 'black',
              borderRadius: '25px',
              padding: '0.5rem 1rem',
              marginRight: '0.3rem',
              userSelect: 'none',
            }}
          >
            {list.name}
          </li>
        ))}

        {location.pathname !== '/reports' && (
          <li
            onClick={goToReports}
            style={{
              cursor: 'pointer',
              backgroundColor: '#10b981',
              color: 'white',
              borderRadius: '25px',
              padding: '0.5rem 1rem',
              marginLeft: 'auto',
              userSelect: 'none',
            }}
          >
            📊 Reports
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
