function Todo({ todo, onChange, onClick }) {
  return (
    <li className="todo">
      <span>
        <input
          key={todo.id}
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.done ? "checked" : ""}
        />
        {todo.name}
      </span>
      <span
        key={`btn-{todo.id}`}
        style={{ color: "red", fontWeight: 800 }}
        onClick={() => onClick(todo.id)}
      >
        X
      </span>
    </li>
  );
}

export default Todo;
