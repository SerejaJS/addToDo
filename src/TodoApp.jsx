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
    setItems(
      items.map(function (item) {
        if (item.id === id) {
          return {
            id: item.id,
            value: item.value,
            completed: !item.completed,
          };
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

// 2. Создание компонента TodoApp
//    ; • Создать базовую структуру компонента TodoApp. ++++
//    ; • Импортировать компоненты TodoList и TodoForm. ++++
//    • В TodoApp создать состояние для хранения задач в виде массива объектов. Каждый объект должен содержать:
//      • id (уникальный идентификатор) ++++
//      • text (текст задачи) ++++
//      • completed (логическое значение, указывающее, выполнена задача или нет) ++++

// function TestPropsArray({id,text,completed} ) {
//   console.log(id,text);
//   return (
//     <div>
//       <h2>ИД: {id} </h2>
//       <p>ТЕКСТ: {text}</p>
//     </div>
//   );
// }

// function App() {
//   // const [items, setItems] = useState([]);

//   return (
//     <>
//       <div className="toDoMine">
//         <TestPropsArray
//           id={testArray[0].id}
//           text={testArray[0].text}
//           completed={testArray[0].completed}
//         />
//         <TestPropsArray {...testArray[1]} />
//         <TestPropsArray {...testArray[2]} />
//       </div>
//     </>
//   );
// }
