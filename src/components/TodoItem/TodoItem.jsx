import style from "./style.module.css";

export default function TodoItem(props) {
  let { item, data_key, todosList, setTodosList } = props;

  const handlerDelete = (item) => {
    setTodosList(
      todosList.filter((filterItem) => {
        return filterItem != item;
      })
    );
  };

  const handleClick = (item) => {
    setTodosList(
      todosList.map((todo) =>
        todo.name === item.name ? { ...todo, done: !item.done } : todo
      )
    );
  };

  const className = item.done === true ? style.completed : "";

  return (
    <li className={style.list_item}>
      <span
        className={className}
        onClick={() => {
          handleClick(item);
        }}
      >
        {item.name}
      </span>
      <span
        onClick={() => {
          return handlerDelete(item);
        }}
        className={style.list_remove}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" />
        </svg>
      </span>
    </li>
  );
}
