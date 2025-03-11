import "./ToDoItem.css";
import {Task} from "../../types/TypeTask"

interface ItoDoItemProps {
  item : Task;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

export default function TodoItem({ item, deleteTask, toggleTask }: ItoDoItemProps) {
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
