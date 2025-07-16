import TaskItem from './TaskItem';

function TaskBoard({ tasks, onRemove, onToggleComplete, children }) {
  if (!tasks.length) return <p>No tasks available</p>; /* punto 4 contional*/ 

  return (
    <section>
      {children} {/*where is showed the content sent from app.jsx*/}
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onRemove={onRemove}
            onToggleComplete={onToggleComplete} /*list rendering, punto 3, 11*/
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskBoard;


