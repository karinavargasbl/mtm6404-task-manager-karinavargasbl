import TaskItem from './TaskItem';

function TaskBoard({ tasks, onRemove, onToggleComplete, children }) {
  if (!tasks.length) return <p>No tasks available</p>;

  return (
    <section>
      {children} {/* this renders the children passed from App.jsx where is showed the content sent from app.jsx*/}
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


