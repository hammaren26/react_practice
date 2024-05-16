import TodoItem from "../TodoItem/TodoItem";
import style from "./style.module.css";

export default function TodosList({ todosList, setTodosList }) {
  const sortedTodoList = todosList.slice().sort((a, b) => {
    console.log({
      a: Number(a.done),
      b: Number(b.done),
    });
    return Number(a.done) - Number(b.done);
  });

  return (
    <>
      {todosList.length ? (
        <ul className={style.list}>
          {sortedTodoList.map((item, index) => (
            <TodoItem
              data_key={index}
              key={item.name}
              item={item}
              todosList={todosList}
              setTodosList={setTodosList}
            ></TodoItem>
          ))}
        </ul>
      ) : undefined}
    </>
  );
}
