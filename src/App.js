import React, { useState } from "react";
import TodoList from "./todo/todoList";
import AddTodo from "./todo/addTodo";

function App() {
  let [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Принять душ" },
    { id: 2, completed: false, title: "Позавтракать" },
    { id: 3, completed: false, title: "Приступить к работе" },
  ]);

  // Отмечает выполнено/невыполнено на задаче
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // Добавление новой задачи в массив todos
  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <div className="content">
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Нет задач</p>
        )}
      </div>
    </div>
  );
}

export default App;
