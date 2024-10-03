import { useLayoutEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import style from "./style.module.css";

export default function TodosList({ todosList, setTodosList }) {
  useLayoutEffect(() => {
    let list = JSON.parse(localStorage.getItem("todo-list"));

    if (list.length > 0) {
      setTodosList(list);
    }
  }, []);

  const sortedTodoList = todosList.slice().sort((a, b) => {
    return Number(a.done) - Number(b.done);
  });

  return (
    <>
      {todosList.length ? (
        <ul
          className={`${style.todo_list} flex flex-col custom_scroll gap-3 rounded-md p-4 mr-4 ml-4 mt-4 bg-white shadow-lg overflow-y-auto`}
        >
          {sortedTodoList.map((item, index) => (
            <TodoItem
              data_key={index}
              key={item.id}
              item={item}
              todosList={todosList}
              setTodosList={setTodosList}
            ></TodoItem>
          ))}
        </ul>
      ) : null}
    </>
  );
}
