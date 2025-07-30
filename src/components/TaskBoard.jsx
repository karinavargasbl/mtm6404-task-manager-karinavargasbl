// src/components/TaskBoard.jsx
import TaskItem from './TaskItem';

function TaskBoard({ tasks, onRemove, onToggleComplete, children }) {
  if (!tasks.length) return <p>No tasks available</p>; /*PUNTO 4*/

  return (
    <section>
      {children} {/* This renders whatever is passed inside <TaskBoard> ... </TaskBoard> PUNTO #2*/} 
      <ul className="task-list">
        {tasks.map(task => ( /*PUNTO 3*/
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



