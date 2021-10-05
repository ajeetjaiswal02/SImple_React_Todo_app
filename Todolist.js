import Todo from "./Todo";
function Todolist({ todo, toggle }) {
  return todo.map((todo) => {
    return <Todo todo={todo} toggle={toggle} />;
  });
}

export default Todolist;
