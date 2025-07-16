function TaskItem({ task, onRemove, onToggleComplete }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <span>{task.text}</span><br></br> {/*shows the text of the task*/}
        <small className={`priority ${task.priority.toLowerCase()}`}>
          Priority: {task.priority} {/*shows the text of the task*/}
        </small>
      </div>
      <div className="button-group">
        <button
          className={task.completed ? 'status-btn completed' : 'status-btn not-completed'} /*shows state of completion*/
          onClick={() => onToggleComplete(task.id)}  /*punto 10*/
        >
          {task.completed ? '✅ Completed' : '❌ Not Completed'} {/*calls ontoggleC from app.jsx to update, punto 3,*/}
        </button> 
        <button className="status-btn" onClick={() => onRemove(task.id)}>🗑️ Delete</button>   {/*punto11*/}
      </div>
    </li>
  );
}

export default TaskItem;
