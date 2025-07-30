// src/pages/ListPage.jsx
// src/pages/ListPage.jsx
import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

import TaskBoard from '../components/TaskBoard';
import CreateTaskForm from '../components/CreateTaskForm';
import CreateListForm from '../components/CreateListForm';
import ToggleCompleted from '../components/ToggleCompleted';

function ListPage() {
  const { listId } = useParams();
  const navigate = useNavigate();
  const {
    lists,
    activeListId,
    setActiveListId,
    addTask,
    removeTask,
    toggleComplete,
    showCompleted,
    setShowCompleted,
    removeList,
  } = useContext(TaskContext);

  const [priorityFilter, setPriorityFilter] = useState(() => {
  return localStorage.getItem('priorityFilter') || 'All';
});

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const idNum = parseInt(listId);
    if (!lists.find(l => l.id === idNum)) {
      navigate('/');
    } else {
      setActiveListId(idNum);
    }
  }, [listId, lists, navigate, setActiveListId]);

  useEffect(() => {
  localStorage.setItem('priorityFilter', priorityFilter);
}, [priorityFilter]);

  const activeList = lists.find(list => list.id === activeListId); 

  const filteredTasks = activeList?.tasks
    .filter(task => (showCompleted ? task.completed : true))
    .filter(task => task.text.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(task => priorityFilter === 'All' || task.priority === priorityFilter)
    .sort((a, b) => {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }) || [];

  const handleDeleteList = () => {
    removeList(activeListId);
    if (lists.length > 1) {
      const otherList = lists.find(list => list.id !== activeListId);
      if (otherList) navigate(`/list/${otherList.id}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="container" style={{ padding: '1rem' }}>
      <h1 style={{ color: '#000', marginBottom: '1rem' }}>List: {activeList?.name}</h1>

      {/* Contenedor flex para los dos formularios */}
      <div className="form-row">
        <div className="list-form-container">
    <CreateListForm />
  </div>
  <div className="task-form-container">
    <CreateTaskForm addTask={addTask} />
  </div>
</div>

      <button
        onClick={handleDeleteList}
        disabled={lists.length === 1}
        style={{
          margin: '1rem 0',
          padding: '0.5rem 1rem',
          cursor: lists.length === 1 ? 'not-allowed' : 'pointer'
        }}
      >
        Delete This List
      </button>  

      <div style={{ margin: '1rem 0' }}>
        <ToggleCompleted showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ marginLeft: '1rem', padding: '0.3rem 0.6rem', fontSize: '1rem' }}
        />
        <select
  value={priorityFilter}
  onChange={(e) => setPriorityFilter(e.target.value)}
  style={{ marginLeft: '1rem', padding: '0.3rem 0.6rem', fontSize: '1rem' }}
>
  <option value="All">All Priorities</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>

      </div>

      <TaskBoard
        tasks={filteredTasks}
        onRemove={removeTask}
        onToggleComplete={toggleComplete}
      >
        <h4>Tasks</h4>   {/*PUNTO 2*/}
      </TaskBoard>
    </div>
  );
}

export default ListPage;
