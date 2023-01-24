import { useState } from "react";

const ToDoAddForm = ({ add, visible }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <div className={visible ? "showing" : "hidden"}>
      <div className="input-group">
        <div className="form-floating">
          <input
            value={todoText}
            checked={true}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
            placeholder="Enter To-do..."
            className="form-control"
            id="addTodo"
          />
          <label htmlFor="addTodoCompleted">Enter To-do...</label>
        </div>
        <button
          disabled={todoText.length === 0}
          className="btn btn-theme-primary"
          id="push"
          onClick={() => {
            add(todoText);
            setTodoText("");
          }}
        >
          <i className="fas fa-plus"></i> Add Task
        </button>
      </div>
    </div>
  );
};

export default ToDoAddForm;
