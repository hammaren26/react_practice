import style from "./style.module.css";

export default function Footer({ completedTodosLength, todosLength }) {
  return (
    <footer className={style.footer}>
      <span>Completed Todos: {completedTodosLength}</span>
      <br />
      <br />
      <span>Todos length: {todosLength}</span>
    </footer>
  );
}
