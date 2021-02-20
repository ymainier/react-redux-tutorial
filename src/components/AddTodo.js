import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function AddTodo({ addTodo }) {
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button className="add-todo">Add Todo</button>
    </form>
  );
}

export default connect(null, { addTodo })(AddTodo);
