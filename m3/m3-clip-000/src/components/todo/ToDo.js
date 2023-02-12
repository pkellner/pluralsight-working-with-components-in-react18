const ToDo = ({
  todoItem,
  handleToggleCompleted,
  handleDelete,
  handleEdit,
  idUpdating,
}) => {
  return (
    <div
      key={todoItem.id}
      className={
        todoItem.completed ? "single-task completed" : "single-task"
      }
    >
      <div
        onClick={() => {
          return handleToggleCompleted(todoItem.id);
        }}
      >
        {todoItem.important ? (
          <span className="badge warning-bg">
            <i className="fa fa-exclamation-circle"></i>
          </span>
        ) : null}
        {todoItem.todoText}
      </div>

      {idUpdating === todoItem.id ? (
        <button
          className="btn btn-primary busy-spinner"
          type="button"
          disabled
        >
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Loading...</span>
        </button>
      ) : null}

      <div className="task-actions">
        <button
          className="btn edit"
          title="Edit"
          onClick={() => handleEdit(todoItem)}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>

        <button
          className="btn delete"
          title="Delete"
          onClick={() => {
            const response = window.confirm("Delete?");
            if (response) {
              handleDelete(todoItem.id);
            }
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDo;
