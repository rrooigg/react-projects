function TodoList() {
  return (
    <div className="container">
      <div className="input-section">
        <input type="text" placeholder="Enter your todo"/>
        <button>Add</button>
      </div>
      <div className="list">
        <p cl>Do programming assignment.</p>
        <button>Delete</button>
      </div>
    </div>
  );

}
export default TodoList