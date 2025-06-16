const Navbar = () => (
  <nav className="navbar">
    <h1>💖 Jewelry Task Manager 💎</h1>
  </nav>
);

const Sidebar = () => (
  <aside className="sidebar">
    <p>✨ Priorities</p>
    <ul>
      <li>High</li>
      <li>Medium</li>
      <li>Low</li>
    </ul>
  </aside>
);

const TaskItem = ({ task }) => (
  <li className="task-item">🔸 {task}</li>
);

const TaskList = () => {
  const tasks = [
    "Check inventory of necklaces",
    "Pack personalized orders",
    "Program instagram posts",
    "Clean windows and shelves",
    "Answer customers messages"
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
