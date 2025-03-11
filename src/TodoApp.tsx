import { useState } from "react";
import TodoForm from "./Components/ToDoForm/TodoForm";
import TodoList from "./Components/ToDolist/TodoList";
import { Task } from "./types/TypeTask";
import "./App.css";


function App() {
  const [items, setItems] = useState<Task[]>([]);
  // Добавление новой задачи
  function addTask(value: string) {
    const newTask: Task = {
      id: Date.now(), // Генерирую себе ID задачи
      value, //мой текст из инпута.
      completed: false, // статус задачи.
    };

    setItems((prevItems) => [...prevItems, newTask]); //через ...Items я добавляю в новый массив свой объект.
  }

  //удаление задачиЫ
  function deleteTaskButton(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  //Изменяю статус задачи по кнопке
  function toggleButton(id: number) {
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        completed: item.id === id ? !item.completed : item.completed,
      }))
    );
  }

  return (
    <>
      <div className="toDoMine">
        <TodoForm addTask={addTask} />
        <TodoList
          deleteTask={deleteTaskButton}
          toggleTask={toggleButton}
          stateItems={items}
        />
      </div>
    </>
  );
}

export default App;
