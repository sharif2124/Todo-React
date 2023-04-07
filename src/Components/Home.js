import React, { useState } from "react";
// @ts-ignore

import Todos from "./Todos";
// @ts-ignore
import style from "./home.module.css";
import NewTodo from "./NewTodo";
const { v4: uuidv4 } = require("uuid");
const Home = () => {
  const [todos, setTodos] = useState([]);
  const handelNewTodo = (todo) => {
    // @ts-ignore
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handelRemove = (id) => {
    setTodos((prevTodos) => {
      const filterTodo = prevTodos.filter((todo) => todo.id !== id);
      return filterTodo;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onAddTodo={handelNewTodo} />
      <Todos todos={todos} onRemoveTodo={handelRemove} />
    </div>
  );
};

export default Home;
