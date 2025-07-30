// src/components/TaskBoard.jsx
import TaskItem from './TaskItem';

function TaskBoard({ tasks, onRemove, onToggleComplete, children }) {
  if (!tasks.length) return <p>No tasks available</p>;

  return (
    <section>
      {children}
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onRemove={onRemove}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskBoard;



