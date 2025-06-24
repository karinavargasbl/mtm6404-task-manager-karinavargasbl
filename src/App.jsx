
import NavBar from './components/NavBar';
import TaskBoard from './components/TaskBoard';
import Footer from './components/Footer';

const tasks = [
  { text: "Check necklaces inventory", priority: "High", completed: true },
  { text: "Pack personalized orders", priority: "Medium", completed: false },
  { text: "Program instagram content", priority: "Low", completed: true },
  { text: "Clean windows and shelves", priority: "High", completed: false },
  { text: "Reply to customer messages", priority: "Medium", completed: true },
  { text: "Create TikTok draft", priority: "Low", completed: false },
  { text: "Organize earrings section", priority: "Medium", completed: true },
  { text: "Reorder popular items", priority: "High", completed: false },
  { text: "Follow up with suppliers", priority: "Medium", completed: true },
  { text: "Update store banner", priority: "Low", completed: false }
];

function App() {
  return (
    <>
      <NavBar>
        <li>Task</li>
        <li>Status</li>
        <li>Reports</li>
      </NavBar>

      <div className="container">
        <h1>Task Manager</h1>
        <div className="counter">Total Tasks: {tasks.length}</div>
        <TaskBoard tasks={tasks} />
      </div>

      <Footer />
    </>
  );
}

export default App;
