import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate
import { TaskContext } from '../context/TaskContext';

function Reports() {
  const { lists } = useContext(TaskContext);
  const navigate = useNavigate(); 
  
  const handleBackToList = () => {
    navigate('/list/1'); 
  };

  return (
    <div
      style={{
        padding: '1rem',
        minHeight: 'calc(90vh - 80px)', 
      }}
    >
      <h2>Task Reports</h2>

      <button
        onClick={handleBackToList}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        Back to Default List
      </button>

      {lists.length === 0 && <p>No task lists available.</p>}
      <ul>
        {lists.map(list => (
          <li key={list.id}>
            <strong>{list.name}</strong>: {list.tasks ? list.tasks.length : 0} tasks
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
