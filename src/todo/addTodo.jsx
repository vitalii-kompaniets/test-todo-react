import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState("");

  // Добавление новой задачи с последующим очищением инпута
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };
  return (
    <form className="tasks-form" onSubmit={handleSubmit}>
      <input className="add-task-input" value={value} onChange={(event) => setValue(event.target.value)} />
      <button className="btn btn-add-task" type="submit">Добавить задачу</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
