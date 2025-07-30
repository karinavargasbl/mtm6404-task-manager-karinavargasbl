// src/components/CreateListForm.jsx
import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function CreateListForm() {
  const { addList } = useContext(TaskContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addList(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-list-form">
      <input
        type="text"
        placeholder="New list name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="input-list-name"
      />
      <button type="submit" className="btn-list-add">Add List</button>
    </form>
  );
}

export default CreateListForm;
