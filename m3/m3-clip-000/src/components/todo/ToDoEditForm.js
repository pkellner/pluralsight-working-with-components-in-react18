const ToDoEditForm = ({
  todoRecord,
  setTodoRecord,
  update,
  visible,
  setAddOrEdit,
}) => {
  return (
    <div className={visible ? "showing" : "hidden"}>
      <div className="input-group">
        <div className="form-floating">
          <input
            value={todoRecord.todoText}
            checked={true}
            onChange={(e) => {
              setTodoRecord({
                ...todoRecord,
                todoText: e.target.value,
              });
            }}
            placeholder="Enter To-do..."
            className="form-control"
            id="addTodo"
          />
          <label htmlFor="addTodoCompleted">Enter To-do...</label>
        </div>

        <button
          className="btn btn-theme-primary"
          id="push"
          onClick={update}
        >
          Update Item
        </button>
        <button
          className="btn btn-theme-primary"
          id="push"
          onClick={() => {
            setAddOrEdit("add");
          }}
        >
          Cancel
        </button>
      </div>
      <div className="task-modifier">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todoRecord.important}
            id="importantCheckbox"
            onChange={() => {
              setTodoRecord({
                ...todoRecord,
                important: !todoRecord.important,
              });
            }}
          />
          <label
            className="form-check-label"
            htmlFor="importantCheckbox"
          >
            Important
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todoRecord.completed}
            id="completedCheckbox"
            onChange={() => {
              setTodoRecord({
                ...todoRecord,
                completed: !todoRecord.completed,
              });
            }}
          />
          <label
            className="form-check-label"
            htmlFor="completedCheckbox"
          >
            Completed
          </label>
        </div>
      </div>
    </div>
  );
};

export default ToDoEditForm;
