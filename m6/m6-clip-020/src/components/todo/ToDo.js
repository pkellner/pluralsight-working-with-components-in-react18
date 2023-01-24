import ErrorBoundary from "../common/ErrorBoundary";

const Inner = ({
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
        todoItem.completed
          ? "single-task completed"
          : "single-task"
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
        {todoItem.todoText.slice(0,60)}
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
          <span className="visually-hidden">
            Loading...
          </span>
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

const debug = true;

const ToDoErrorBoundary = (props) => {
  return (
    <div className="single-task text-bg-danger">
      {debug ? (
        <b>ERROR PROCESSING ToDo: {JSON.stringify(props)}</b>
      ) : (
          <b>Problem displaying message</b>
      )
      }
    </div>
  )
}

const ToDo = (props) => {
  return (
    <ErrorBoundary
      errorUI={<ToDoErrorBoundary {...props} />}>
      <Inner {...props} />
    </ErrorBoundary>
  )
}

export default ToDo;
