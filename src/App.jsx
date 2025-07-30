// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';   /*PUNTO 5*/
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ListPage from './pages/ListPage';  // tu componente para listas
import Reports from './components/Reports';  // tu componente de reports

function App() {
  // Si tienes activeListId en un contexto o estado global, úsalo aquí para redirigir
  // Para este ejemplo, lo pongo fijo a 1, cámbialo según tu lógica
  const activeListId = 1; 

  return (
    <>
      <NavBar />  
      <Routes> 
        <Route path="/" element={<Navigate to={`/list/${activeListId}`} replace />} />
        <Route path="/list/:listId" element={<ListPage />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<p style={{ padding: '1rem' }}>Page Not Found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;



