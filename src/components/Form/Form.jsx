import { useState } from "react";
import style from "./style.module.css";

export default function Form({ todosList, setTodosList }) {
  const [todo, setTodo] = useState({
    name: "",
    done: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodosList([...todosList, todo]);
    setTodo({
      ...todo,
      name: "",
    });
  };

  return (
    <form action="" onSubmit={handleSubmit} className={style.todo_form}>
      <div>
        <input
          value={todo.name}
          onChange={(event) => {
            setTodo({
              name: event.target.value,
              done: false,
            });
          }}
          className={style.todo_input}
          placeholder="enter todo item..."
        />
        <button className={style.modern_btn} type="submit">
          add
        </button>
      </div>
    </form>
  );
}
