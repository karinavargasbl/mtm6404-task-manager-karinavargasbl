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
        {task.completed ? (
          <button className="status-btn completed">✅ Completed</button>
        ) : (
          <button className="status-btn not-completed">❌ Not Completed</button>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
