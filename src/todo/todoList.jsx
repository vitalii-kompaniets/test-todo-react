import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./todoItem";

const TodoList = ({ todos, onToggle }) => {
  const [filtered, setFiltered] = useState(todos);

  // Рендер списка задач при добавлении новой задачи
  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  // Сортировка задач (все, выполненные,невыполненные)
  const todoFilter = (status) => {
    if (status === "all") {
      setFiltered(todos);
    } else {
      let newTodos = [...todos].filter((todo) => todo.completed === status);
      setFiltered(newTodos);
    }
  };

  return (
    <>
      <ul>
        {filtered.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} onChange={onToggle} />;
        })}
      </ul>
      <div className="filter-menu">
        <button className="btn btn-filter" onClick={() => todoFilter("all")}>
          Все задачи
        </button>
        <button className="btn btn-filter" onClick={() => todoFilter(true)}>
          Выполненные
        </button>
        <button className="btn btn-filter" onClick={() => todoFilter(false)}>
          Не выполненные
        </button>
      </div>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
