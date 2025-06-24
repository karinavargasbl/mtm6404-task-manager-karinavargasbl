
import TaskItem from './TaskItem';

function TaskBoard({ tasks }) {
  if (!tasks.length) return <p>No tasks available</p>;

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </ul>
  );
}

export default TaskBoard;
