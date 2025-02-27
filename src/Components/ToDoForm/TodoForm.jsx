import { useState } from "react";
import "./FormStyle.css";

export default function TodoForm({ addTask }) {
  const [inputValue, setInputValue] = useState(""); // Мой инпут для ввода задачи

  function addTaskButton() {
    if (inputValue.trim() !== "") {
      // trim удаляет проблемы со всех сторон + проверка на пустую строку.
      addTask(inputValue);
      setInputValue(""); //очищаю инпут после добавления задачи.
    } else {
      alert("Задача не может быть пустой");
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value); //обновляем новое значение для инпута через новое состояние через браузерное событие event
  }
  //   Добавляю задачу по нажатию Enter
  function handleKeyEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // preventDefault отменяет стандартное поведение браузера.
      addTaskButton(); // вызываю функцию добавления новой задачи.
    }
  }

  return (
    <div>
      <form className="addForm">
        <input
          type="text"
          placeholder="Введите новую задачу"
          className="inputStyle"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyEnter}
        />
        <button type="button" onClick={addTaskButton} className="addButton">
          Добавить
        </button>
      </form>
    </div>
  );
}

//Если используется HTML тег <form> то:
// если элементу button не указать type, то по умолчанию он будет = submit и  отправляет страницу на перезагрузку.
// поэтому для решения лучше задать type = 'button' и перезагрузки не будет
