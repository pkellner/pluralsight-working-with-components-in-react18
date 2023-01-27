import {memo} from "react";

function ToDoItemText({ important, todoText }) {
  return (
    <>
      {important ? (
        <span className="badge warning-bg">
          <i className="fa fa-exclamation-circle"></i>
        </span>
      ) : null}
      {todoText.slice(0, 60)}
    </>
  );
}

const memoizedComponent =
  React.memo(originalComponent)

export default memo(ToDoItemText);
