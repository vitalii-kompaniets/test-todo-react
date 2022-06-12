import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, onChange }) => {
  // Создание  динамического класса для выполненной задачи
  const classes = [];
  if (todo.completed) {
    classes.push("task-done");
  }

  return (
    <li>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        {todo.title}
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
