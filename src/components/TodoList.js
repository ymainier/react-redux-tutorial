import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

function selectTodo(state) {
  return getTodosByVisibilityFilter(state, state.visibilityFilter);
}

export default function TodoList() {
  const todos = useSelector(selectTodo);
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
}
