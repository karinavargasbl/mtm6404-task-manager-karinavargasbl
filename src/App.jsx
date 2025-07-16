import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import TaskBoard from './components/TaskBoard';
import Footer from './components/Footer';
import CreateTaskForm from './components/CreateTaskForm';
import SearchTask from './components/SearchTask';
import ToggleCompleted from './components/ToggleCompleted';
import Reports from './components/Reports';
import './App.css';

function App() {
  const initialTasks = [
    { id: 1, text: "Check necklaces inventory", priority: "High", completed: true },
    { id: 2, text: "Pack personalized orders", priority: "Medium", completed: false },
    { id: 3, text: "Program Instagram content", priority: "Low", completed: true },
    { id: 4, text: "Clean windows and shelves", priority: "High", completed: false },
    { id: 5, text: "Reply to customer messages", priority: "Medium", completed: true },
    { id: 6, text: "Create TikTok draft", priority: "Low", completed: false },
    { id: 7, text: "Organize earrings section", priority: "Medium", completed: true },
    { id: 8, text: "Reorder popular items", priority: "High", completed: false },
    { id: 9, text: "Follow up with suppliers", priority: "Medium", completed: true },
    { id: 10, text: "Update store banner", priority: "Low", completed: false }
  ];

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    const parsed = stored ? JSON.parse(stored) : null;
    return parsed && parsed.length > 0 ? parsed : initialTasks;
  });

  const [showCompleted, setShowCompleted] = useState(() => {
    const stored = localStorage.getItem('showCompleted');
    return stored ? JSON.parse(stored) : false;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState(() => {
    return localStorage.getItem('priorityFilter') || 'All';
  });

  const [activeTab, setActiveTab] = useState(() => {
  return localStorage.getItem('activeTab') || 'Tasks';
});
  const [showPanel, setShowPanel] = useState(() => {
  const stored = localStorage.getItem('showPanel');
  return stored ? JSON.parse(stored) : false;
});



  const togglePanel = () => setShowPanel(!showPanel);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('priorityFilter', priorityFilter);
  }, [priorityFilter]);

  useEffect(() => {
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
  }, [showCompleted]);

  useEffect(() => {
  localStorage.setItem('activeTab', activeTab);
}, [activeTab]);

useEffect(() => {
  localStorage.setItem('showPanel', JSON.stringify(showPanel));
}, [showPanel]);


  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      priority,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter(task => (showCompleted ? task.completed : true))
    .filter(task => task.text.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(task => priorityFilter === 'All' ? true : task.priority === priorityFilter)
    .sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

  const motivationalQuotes = [
    "Trust your sparkle ✨",
    "Each task brings you closer to your dream.",
    "Being organized is an act of self-care.",
    "You're capable of amazing things.",
    "You're doing great – keep it up!"
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <>
      <NavBar onNavClick={setActiveTab} />

      <div className="container iteration-3-container">
        {activeTab === 'Tasks' && (
          <>
            <div className="form-section">
              <CreateTaskForm addTask={addTask} />
            </div>
            <div className="task-section">
              <h1 style={{ color: '#000' }}>💎 Gem Organizer 💍</h1>

              <div className="task-controls">
                <SearchTask searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <div className="filter-section">
                  <label htmlFor="priority" style={{ color: '#000' }}>Filter by priority:</label>
                  <select
                    id="priority"
                    name="priority"
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="task-meta-controls">
                <ToggleCompleted showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
                <div className="counter" style={{ color: '#000' }}>Total Tasks: {filteredTasks.length}</div>
              </div>

              <div className="top-controls">
                <button onClick={togglePanel} className="panel-btn">More</button>
              </div>

              {showPanel && (
                <aside className="offcanvas-panel">
                  <h3 style={{ color: '#000' }}>🌞 Hello, sparkling creator!</h3>
                  <p style={{ color: '#000' }}>
                    📅 Today is {new Date().toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <div className="panel-quote">
                    <h4 style={{ color: '#000' }}>💬 Daily Motivation</h4>
                    <p style={{ color: '#000' }}>{randomQuote}</p>
                  </div>
                  <button onClick={togglePanel} className="close-btn">Close</button>
                </aside>
              )}

              <TaskBoard
  tasks={filteredTasks}
  onRemove={removeTask}
  onToggleComplete={toggleComplete}
>
  <h4 style={{ color: '#000' }}>Today's To Do</h4>
</TaskBoard>

            </div>
          </>
        )}

        {activeTab === 'Status' && (
          <div className="status-section">
            <h2 style={{ color: '#000' }}>📋 Status Overview</h2>
            <div className="status-cards">
              <div className="status-card completed">
                <h3>✅ Completed</h3>
                <p>{tasks.filter(t => t.completed).length}</p>
              </div>
              <div className="status-card incomplete">
                <h3>❌ Incomplete</h3>
                <p>{tasks.filter(t => !t.completed).length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Reports' && (
          <div className="reports-section">
            <h2 style={{ color: '#000' }}>📊 Reports Summary</h2>
            <Reports tasks={tasks} />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
