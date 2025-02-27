import "./ToDoItem.css";
export default function TodoItem({ item, deleteTask, toggleTask }) {
  return (
    <li
      className={`liStyle ${item.completed ? "completed" : "red"}`}
      key={item.id}>{item.value}
      <div className="btnGroup">
      <button className="toggleButton" onClick={() => toggleTask(item.id)}>
        {!item.completed ? "Готово" : "В работу"}
      </button>
      <button
        className="buttonDeleteItem"
        onClick={() => deleteTask(item.id)}
      ></button>
      <pre>Status:{item.completed ? "Выполнено" : "В Работе"}</pre>
      </div>
      
    </li>
  );
}
