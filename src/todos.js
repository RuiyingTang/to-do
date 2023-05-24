import Todo from "./todo.js";
function Todos({ todos, onToggleDone, onDeleteItem }) {
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            onChange={(todoId) => onToggleDone(todoId)}
            onClick={(todoId) => onDeleteItem(todoId)}
          />
        );
      })}
    </ul>
  );
}
export default Todos;
