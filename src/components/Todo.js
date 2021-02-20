import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
}
