import ToDo from "./ToDo";

const ToDoList = ({
  displayStatus,
  toDoList,
  important,
  searchText,
  handleToggle,
  handleDelete,
  handleEdit,
  idUpdating,
}) => {
  return (
    <div className="tasks">
      {toDoList
        .filter((todo) => {
          if (displayStatus === "all") {
            return true;
          } else if (displayStatus === "pending") {
            return todo.completed === false;
          } else if (displayStatus === "completed") {
            return todo.completed === true;
          } else {
            return false; // should not be needed
          }
        })
        .filter((todo) => {
          if (important === true) {
            return todo.important === true;
          } else {
            return true;
          }
        })
        .filter((todo) => {
          if (searchText?.length > 0) {
            return todo.todoText
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase());
          } else {
            return true;
          }
        })
        .map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todoItem={todo}
              handleToggleCompleted={handleToggle}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              idUpdating={idUpdating}
            />
          );
        })}
    </div>
  );
};

export default ToDoList;
