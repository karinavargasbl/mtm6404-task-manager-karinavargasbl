function Reports({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const incomplete = total - completed;

  const countByPriority = (level) =>
    tasks.filter(t => t.priority === level).length;

  return (
    <div className="report-cards">
      <div className="report-card total">
        <h3>📊 Total Tasks</h3>
        <p>{total}</p>
      </div>
      <div className="report-card completed">
        <h3>✅ Completed</h3>
        <p>{completed}</p>
      </div>
      <div className="report-card incomplete">
        <h3>❌ Incomplete</h3>
        <p>{incomplete}</p>
      </div>
      <div className="report-card high">
        <h3>🔺 High Priority</h3>
        <p>{countByPriority('High')}</p>
      </div>
      <div className="report-card medium">
        <h3>🟠 Medium Priority</h3>
        <p>{countByPriority('Medium')}</p>
      </div>
      <div className="report-card low">
        <h3>🟢 Low Priority</h3>
        <p>{countByPriority('Low')}</p>
      </div>
    </div>
  );
}

export default Reports;
