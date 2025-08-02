import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ListPage from './pages/ListPage';
import Reports from './components/Reports';
import { TaskContext } from './context/TaskContext';

function App() {
  const { activeListId } = useContext(TaskContext);

  if (!activeListId) {
    return <p>Loading...</p>; // O un spinner bonito
  }

  return (
    <>
      <NavBar />
      <Routes>
        {/* Redirige a la lista activa real */}
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

