import { useState } from 'react';

function CreateTaskForm({ addTask }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text, priority);
    setText('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form-modern">
  <h3>Create New Task</h3>

  <label className="input-group">
    <span className="input-label">Task Description</span>
    <textarea
      placeholder="Describe your task here..."   
      value={text}
      onChange={(e) => setText(e.target.value)}
      required
      rows={3}
    />
  </label>

  <label className="input-group">
    <span className="input-label">Priority Level</span>
    <div className="priority-options">
      <label>
        <input
          type="radio"
          name="priority"
          value="High"
          checked={priority === 'High'}
          onChange={(e) => setPriority(e.target.value)}
        />
        <span className="priority high">High</span>
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value="Medium"
          checked={priority === 'Medium'}
          onChange={(e) => setPriority(e.target.value)}
        />
        <span className="priority medium">Medium</span>
      </label>
      <label>
        <input
          type="radio"
          name="priority"
          value="Low"
          checked={priority === 'Low'}
          onChange={(e) => setPriority(e.target.value)}
        />
        <span className="priority low">Low</span>
      </label>
    </div>
  </label>

  <button type="submit" className="btn-submit">Add Task</button>
</form>

  );
}

export default CreateTaskForm;
