function ToggleCompleted({ showCompleted, setShowCompleted }) {
  return (
    <label className="toggle-completed-label">
      <input
        type="checkbox"
        checked={showCompleted}
        onChange={() => setShowCompleted(prev => !prev)}
        className="toggle-completed-checkbox"
      />
      Show only completed tasks
    </label>
  );
}


export default ToggleCompleted;



