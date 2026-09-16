import { useState } from "react";

function TodoList() {
  const [ task, setTask ] = useState("");
  const [ todolist, setTodoList ] = useState([]);

  function handleSubmit() {
    setTodoList([
      ...todolist,
      {task:task}
    ]);
    setTask("");
  }
  function handleDelete(index) {
    const updatedItems = [...todolist]; 
    updatedItems.splice(index, 1); 
    setTodoList(updatedItems);
    
  }

  return (
    <div className="container">
      <div className="input-section">
        <input 
        type="text" 
        placeholder="Enter your todo"
        value={task}
        onChange={e => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
        <ul>
          {todolist.map((todo, index) => (
            <>
             <li key={index}>
              {todo.task}
              <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            </>
          ))}
        </ul>
    </div>
  );

}
export default TodoList