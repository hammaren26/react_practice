import style from "./style.module.css";

export default function Footer({ completedTodosLength, todosLength }) {
  const completionPercentage =
    todosLength > 0
      ? Math.round((completedTodosLength / todosLength) * 100)
      : 0;

  return (
    <footer className={style.footer}>
      <span>Всего выполненных задач: {completedTodosLength}</span>
      <br />
      <span>Всего задач: {todosLength}</span>
      <br />
      <span>Процент выполненных задач: {completionPercentage}%</span>
    </footer>
  );
}
