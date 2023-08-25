import 'server-only';
import ToggleImportantButton
  from '../../components/todo/ToggleImportantButton';

export default function ToDoItem({ toDo }) {
  return (
    <div className="single-task">
      <div>
        {toDo.important ? (
          <span className="badge warning-bg">
            <i className="fa fa-exclamation-circle"></i>
          </span>
        ) : null}
        {toDo.todoText.slice(0, 60)}
      </div>
      <ToggleImportantButton toDo={toDo} />
    </div>
  );
}
