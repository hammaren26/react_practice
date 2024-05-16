import { useState } from "react";
import Form from "../Form/Form.jsx";
import TodosList from "../TodosList/TodosList.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Todo() {
  const [todosList, setTodosList] = useState([]);

  let completedTodosLength = todosList.filter((todo) => {
    return todo.done;
  }).length;
  let todosLength = todosList.length;

  return (
    <>
      <Form todosList={todosList} setTodosList={setTodosList} />
      <TodosList todosList={todosList} setTodosList={setTodosList}></TodosList>
      <Footer
        completedTodosLength={completedTodosLength}
        todosLength={todosLength}
      ></Footer>
    </>
  );
}
