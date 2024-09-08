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

  function toCamelCase(str) {
    let arr = str.split(/[-_]/);

    arr.forEach((element, index) => {
      if (index > 0) {
        arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
      }
    });

    return arr.join("");
  }

  let str = "the-stealth-warrior";
  let str2 = "The_Stealth_Warrior";
  let str3 = "The_Stealth-Warrior";

  console.log(toCamelCase(str));
  console.log(toCamelCase(str2));
  console.log(toCamelCase(str3));

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
