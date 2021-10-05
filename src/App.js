import "./styles.css";
import Todolist from "../Todolist";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  const [todos, settodo] = useState([]);
  const todonameref = useRef();
  const LOCAL_KEY = "aje";

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storetodo = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (storetodo) settodo(storetodo);
  }, []);

  function addtodo(e) {
    const name = todonameref.current.value;
    if (name === "") return;
    settodo((prevtodo) => {
      return [...prevtodo, { id: uuidv4(), name: name, completed: false }];
    });
    todonameref.current.value = null;
  }

  function toggletodo(id) {
    const newtodo = [...todos];
    const todo = newtodo.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    settodo(newtodo);
  }

  function cleartodo() {
    const newtodo = todos.filter((todo) => !todo.completed);
    settodo(newtodo);
  }

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