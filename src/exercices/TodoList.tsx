import React, { useState } from "react";

const Card = (props) => {
  return (
    <div style={{width: "max-content", margin: 10, padding: 5, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      {props.children}
    </div>
  );
};

export function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Master Redux", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  const totalTodos = todos.length;
  const completedTodos = todos.filter((x) => x.completed).length;

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = () => {
    if (newTodoText.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: newTodoText,
          completed: false,
        },
      ]);
      setNewTodoText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <h3>
        Completed {completedTodos} out of {totalTodos} todos
      </h3>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <Card>
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>X</button>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
}
