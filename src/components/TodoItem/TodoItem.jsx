import style from "./style.module.css";

export default function TodoItem(props) {
  let { item, data_key, todosList, setTodosList } = props;

  const handlerDelete = (item) => {
    let filteredList = todosList.filter((filterItem) => {
      return filterItem != item;
    });

    localStorage.setItem("todo-list", JSON.stringify(filteredList));

    setTodosList(filteredList);
  };

  const handleClick = (item) => {
    let updatedList = todosList.map((todo) =>
      todo.id === item.id ? { ...todo, done: !item.done } : todo
    );

    localStorage.setItem("todo-list", JSON.stringify(updatedList));

    setTodosList(updatedList);
  };

  return (
    <li
      className={`${
        item.done === true ? style.item_done : null
      } gap-4 flex items-center justify-between py-4 px-4 bg-gray-100 hover:bg-gray-200 transition duration-200`}
    >
      <span className="flex-1">{item.name}</span>

      <span
        onClick={() => {
          handleClick(item);
        }}
        className={`cursor-pointer ${
          item.done === true ? style.done_icon : null
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48px"
          height="48px"
        >
          <path
            className=""
            opacity="0.5"
            d="M19.8,10.4c0.1,0.5,0.2,1.1,0.2,1.6c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8c1.6,0,3.2,0.5,4.4,1.3l1.4-1.4 C16.2,2.7,14.2,2,12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10c0-1.1-0.2-2.2-0.5-3.2L19.8,10.4z"
          />
          <path
            opacity="0.5"
            d="M11 16.4L6.3 11.7 7.7 10.3 11 13.6 21.3 3.3 22.7 4.7z"
          />
          <path d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z" opacity="0" />
        </svg>
      </span>

      <span
        onClick={() => {
          return handlerDelete(item);
        }}
        className="text-red-500 hover:text-red-700 transition duration-200 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
          fill="currentColor"
        >
          <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z" />
        </svg>
      </span>
    </li>
  );
}
