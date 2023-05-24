import { useState } from "react";
import "./App.css";
import Todos from "./todos.js";
import NewTodo from "./newTodo";

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [todos, setTodos] = useState(allTodos);

  const handleNewToDo = (todo) => {
    if (todo !== "") {
      const newAllTodos = allTodos.concat({
        id: allTodos.length + 1,
        name: todo,
        done: false,
      });
      const newTodos = todos.concat({
        id: todos.length + 1,
        name: todo,
        done: false,
      });
      setAllTodos(newAllTodos);
      setTodos(newTodos);
    }
  };

  const toggleDone = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);

    const newAllTodos = allTodos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setAllTodos(newAllTodos);
  };

  const deleteItem = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
    setAllTodos(allTodos.filter((todo) => todo.id !== todoId));
  };

  const activeTodos = () => {
    const todos = allTodos;
    setTodos(todos.filter((todo) => !todo.done));
  };

  const completedTodos = () => {
    const todos = allTodos;
    setTodos(todos.filter((todo) => todo.done));
  };

  const clearCompleted = () => {
    const todos = allTodos;
    setTodos(todos.filter((todo) => !todo.done));
    setAllTodos(allTodos.filter((todo) => !todo.done));
  };

  const todosLeft = allTodos.filter((todo) => !todo.done);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>My To-Do List</h1>
      <div className="container">
        <NewTodo onNewToDo={(todo) => handleNewToDo(todo)} />
        <Todos
          todos={todos}
          onToggleDone={(todoId) => toggleDone(todoId)}
          onDeleteItem={(todoId) => deleteItem(todoId)}
        />
        <div className="controls">
          <span>
            {todosLeft.length} item(s) left
            <button onClick={() => setTodos(allTodos)}>All</button>
            <button onClick={activeTodos}>Active</button>
            <button onClick={completedTodos}>Completed</button>
          </span>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
