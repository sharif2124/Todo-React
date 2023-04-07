import React, { useState } from "react";
// @ts-ignore
import style from "./newtodo.module.css";
const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  //disturuct
  const { title, desc } = todo;
  const handelChange = (event) => {
    const name = event.target.name;

    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form className={style.form} onSubmit={handelSubmit}>
      <div className={style["form-field"]}>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handelChange}
        ></input>
      </div>
      <div className={style["form-field"]}>
        <label>Description:</label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handelChange}
        />
      </div>
      <button id="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
