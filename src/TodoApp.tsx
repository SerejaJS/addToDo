import TodoForm from "./Components/ToDoForm/TodoForm";
import TodoList from "./Components/ToDolist/TodoList";
import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  // Добавление новой задачи
  function addTask(value) {
    const newTask = {
      id: Date.now(), // Генерирую себе ID задачи -- Не знаю как сделать так, чтобы ID задач начинался с №1???
      value, //мой текст из инпута.
      completed: false, // статус задачи.
    };

    setItems([...items, newTask]); //через ...Items я добавляю в новый массив свой объект.
  }
  //удаление задачи
  function deleteTaskButton(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  //Изменяю статус задачи по кнопке
  function toggleButton(id) {
    setItems(items.map(item =>  {...item, completed: item.id === id ? !item.completed : item.completed})
      }
        return item;
      })
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

// items.map(function (item) {
//         if (item.id === id) {
//           return {
//             id: item.id,
//             value: item.value,
//             completed: !item.completed,
//           };
