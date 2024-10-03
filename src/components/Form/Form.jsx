import { useState } from "react";
import { nanoid } from "nanoid";
import style from "./style.module.css";

export default function Form({ todosList, setTodosList }) {
  const [todo, setTodo] = useState({
    name: "",
    done: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todo.name !== "") {
      let todoObj = { ...todo, id: nanoid() };

      setTodosList([...todosList, todoObj]);

      localStorage.setItem(
        "todo-list",
        JSON.stringify([...todosList, todoObj])
      );

      setTodo({
        ...todo,
        name: "",
      });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit} className={style.todo_form}>
      <div className="flex w-full">
        <input
          type="text"
          autoComplete="on"
          value={todo.name}
          onChange={(event) => {
            setTodo({
              name: event.target.value,
              done: false,
            });
          }}
          className="w-full border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Сходить за хлебушком..."
        />
        <button
          className="whitespace-nowrap bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Добавить задачу
        </button>
      </div>
    </form>
  );
}
