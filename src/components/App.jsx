import React, { useState } from "react";

function App() {
  const [change, setChange] = useState("");
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    let list = event.target.value;
    setChange(list);
  }

  function handleClick() {
    setTodo(change);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{todo}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
