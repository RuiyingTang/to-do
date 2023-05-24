import { useState } from "react";

function NewTodo({ onNewToDo }) {
  const [todo, setTodo] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onNewToDo(todo);
      setTodo("");
    }
  };

  return (
    <div>
      <input
        style={{ width: "100%", padding: "10px 0", margin: -2, fontSize: 16 }}
        value={todo}
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default NewTodo;
