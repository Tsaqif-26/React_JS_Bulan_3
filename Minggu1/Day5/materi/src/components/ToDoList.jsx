import { useState } from "react";

function ToDoList({ todos, setTodos }) {
  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === "") return;

    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoText("");
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Tambahkan tugas..."
        />
        <button type="submit">Tambah</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>

            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>Hapus</button>
            
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ToDoList;
