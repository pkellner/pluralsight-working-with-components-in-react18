import ToDoItem from '../../components/todo/ToDoItem';
import ToDoItemClient from '../../components/todo/ToDoItemClient';

async function ToDoList() {
  const response = await fetch('/api/todos');
  const todosData = await response.json();
  return (
    <ul>
      {todosData.map((toDo) => {
        return <li key={toDo.id}>{toDo.text}</li>
      })}
    </ul>
  );
}
