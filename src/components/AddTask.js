import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../action";

const AddTask = ({ filter, handleFilter }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    text
      ? dispatch(addTask({ id: Math.random(), task: text, isDone: false }))
      : alert("please fill the form");
    setText("");
  };
  return (
    <div>
      <h1>Our to-do app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <button onClick={handleFilter}> {filter ? "all" : "filter"} </button>
    </div>
  );
};
export default AddTask;
