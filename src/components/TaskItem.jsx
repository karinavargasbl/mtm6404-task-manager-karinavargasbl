function TaskItem({ task, onRemove, onToggleComplete }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <span>{task.text}</span><br></br>
        <small className={`priority ${task.priority.toLowerCase()}`}>
          Priority: {task.priority}
        </small>
      </div>
      <div className="button-group">
        <button
          className={task.completed ? 'status-btn completed' : 'status-btn not-completed'}
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? '✅ Completed' : '❌ Not Completed'}
        </button>
        <button className="status-btn" onClick={() => onRemove(task.id)}>🗑️ Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
