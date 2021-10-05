function Todo({ todo, toggle }) {
    function check() {
      toggle(todo.id);
    }
    return (
      <div>
        <input type="checkbox" onChange={check} checked={todo.completed} />
        {todo.name}
      </div>
    );
  }
  export default Todo;
  