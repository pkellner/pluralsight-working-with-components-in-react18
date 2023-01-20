import { memo } from "react";

function TodoItemText({ important, todoText }) {
  console.log(`TodoItemText: ${important}:${todoText}`);
  return <>
    {important ? (
      <span className="badge warning-bg">
              <i className="fa fa-exclamation-circle"></i>
            </span>
    ) : null}
    {todoText}
  </>;
}

//export default memo(TodoItemText);
export default TodoItemText;
