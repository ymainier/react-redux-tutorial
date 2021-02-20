import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button className="add-todo">Add Todo</button>
    </form>
  );
}
