//Для отображения списка задач
import React from "react";
import "./ToDoList.css";
import TodoItem from "../ToDoItem/TodoItem";
import { Task } from "../../types/TypeTask";

interface ITodoListProps {
  stateItems: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  stateItems,
  deleteTask,
  toggleTask,
}) => {
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
};
export default TodoList;
