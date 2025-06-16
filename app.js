const tasks = [
  { text: "Check necklaces inventory", priority: "High" },
  { text: "Pack personalized orders", priority: "Medium" },
  { text: "Program instagram content", priority: "Low" },
  { text: "Clean windows and shelves", priority: "High" },
  { text: "Reply to customer messages", priority: "Medium" }
];

function NavBar() {
  return (
    <nav className="navbar">
      <h2> Del Mar Gems </h2>
    </nav>
  );
}

function TaskItem({ task }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <span>{task.text}</span>
        <small className={`priority ${task.priority.toLowerCase()}`}>
          Prioridad: {task.priority}
        </small>
      </div>
      <div className="button-group">
        <button className="status-btn completed">✅ Completed</button>
        <button className="status-btn not-completed">❌ Not Completed</button>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Del Mar Gems. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Task Manager</h1>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
