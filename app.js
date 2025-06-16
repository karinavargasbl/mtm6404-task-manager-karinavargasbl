const Navbar = () => (
  <nav className="navbar">
    <h1>💖 Jewelry Task Manager 💎</h1>
  </nav>
);

const Sidebar = () => (
  <aside className="sidebar">
    <p>✨ Prioridades</p>
    <ul>
      <li>Alta</li>
      <li>Media</li>
      <li>Baja</li>
    </ul>
  </aside>
);

const TaskItem = ({ task }) => (
  <li className="task-item">🔸 {task}</li>
);

const TaskList = () => {
  const tasks = [
    "Revisar inventario de collares",
    "Empacar pedidos personalizados",
    "Programar publicaciones en Instagram",
    "Limpiar vitrinas y mostradores",
    "Responder mensajes de clientes"
  ];

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 Del Mar Gems · Handmade with love 💕</p>
  </footer>
);

const App = () => (
  <div className="container">
    <Navbar />
    <div className="content">
      <Sidebar />
      <main>
        <TaskList />
      </main>
    </div>
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
