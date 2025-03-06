//Для отображения списка задач
import React from "react";
import "./ToDoList.css";
import TodoItem from "../ToDoItem/TodoItem";

export default function TodoList({ stateItems, deleteTask, toggleTask }) {
  return (
    <div className="toDoItemsList">
      <h3 className="">Список задач:</h3>
      <ul className="ulStyle">
        {stateItems.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          );
        })}
      </ul>
    </div>
  );
}
