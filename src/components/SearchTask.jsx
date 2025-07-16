function SearchTask({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchTask;

