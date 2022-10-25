function Todo({ todo, toggle1,toggle2 }) {
    function check() {
      toggle(todo.id.2);
    }
    return (
      <div>
        <input type="checkbox" onChange={check} checked={todo.cleared} />
        {todo.name}
        {todo.completed}
      </div>
    );
  }
  export default Todo;