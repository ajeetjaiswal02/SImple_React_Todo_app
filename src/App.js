import "./styles.css";
import Todolist from "../Todolist";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Todolist todo={todos} toggle={toggletodo} />
      <input type="text" ref={todonameref} />
      <button onClick={addtodo}>ADD TODO</button>
      <button onClick={cleartodo}>CLEAR TODO</button>
      <h2>{todos.filter((todo) => !todo.completed).length} Todo left</h2>
    </div>
  );
}
