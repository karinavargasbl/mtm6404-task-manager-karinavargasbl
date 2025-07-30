import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function Reports() {
  const { lists } = useContext(TaskContext);

  // Ejemplo simple: mostrar la cantidad de tareas por lista
  return (
    <div style={{
        padding: '1rem',
        minHeight: 'calc(90vh - 80px)' // Ajusta 120px según la altura combinada de tu NavBar y Footer
      }}>
      <h2>Task Reports</h2>
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
