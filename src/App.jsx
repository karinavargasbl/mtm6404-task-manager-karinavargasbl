import NavBar from './components/NavBar';
import TaskItem from './components/TaskItem';
import Footer from './components/Footer';

const tasks = [
  { text: "Check necklaces inventory", priority: "High", completed: true },
  { text: "Pack personalized orders", priority: "Medium", completed: false },
  { text: "Program instagram content", priority: "Low", completed: true },
  { text: "Clean windows and shelves", priority: "High", completed: false },
  { text: "Reply to customer messages", priority: "Medium", completed: true },
  { text: "Update website banner", priority: "Low", completed: false },
  { text: "Order new packaging materials", priority: "High", completed: false },
  { text: "Schedule photoshoot for new collection", priority: "Medium", completed: true },
  { text: "Prepare monthly sales report", priority: "High", completed: false },
  { text: "Respond to supplier emails", priority: "Low", completed: true }
];


const filter = 'All';

const filteredTasks =
  filter === 'All' ? tasks : tasks.filter(task => task.priority === filter);

const completedCount = filteredTasks.filter(task => task.completed).length;

function App() {
  return (
    <>
      <NavBar>
        <li>Task</li>
        <li>Status</li>
      </NavBar>

      <div className="container">
        <h1>Task Manager</h1>

        <div className="filter-section">
          <label htmlFor="filter">Filter by priority:</label>
          <select id="filter" value={filter} disabled>
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <p className="counter">
          Completed {completedCount} of {filteredTasks.length} tasks
        </p>

        <ul className="task-list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <TaskItem key={index} task={task} />
            ))
          ) : (
            <p>No tasks match this filter.</p>
          )}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default App;
