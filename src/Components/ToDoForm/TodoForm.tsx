import { ChangeEvent, KeyboardEvent, useState } from "react";
import "./FormStyle.css";

interface ItoDoFormProps {
  addTask: (value: string) => void;
}

const TodoForm: React.FC<ItoDoFormProps> = ({ addTask }) => {
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

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value); //обновляем новое значение для инпута через новое состояние через браузерное событие event
  }
  //   Добавляю задачу по нажатию Enter
  function handleKeyEnter(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault(); // preventDefault отменяет стандартное поведение браузера.
      addTaskButton(); // вызываю функцию добавления новой задачи.
    }
  }

  return (
    <>
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
    </>
  );
};

export default TodoForm;
