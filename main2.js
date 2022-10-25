function main({ todo, toggle }) {
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
  export default main;