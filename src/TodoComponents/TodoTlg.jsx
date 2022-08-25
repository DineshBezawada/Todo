import React, { useState } from "react";
import TodoDel from "./TodoDel";
import {useRef} from 'react';

const TodoTlg = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos)
  const form =useRef(null);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler =(e) =>{
    e.preventDefault();
     const newTodos =[...todos,task];
     setTodos(newTodos);
     form.current.reset()
  }

   const deleteHandler =(indexvalue) =>{
    const newTodos = todos.filter((todo,index)=>(index !==indexvalue));
    setTodos(newTodos)
   }

  return (
    <div>
      <div className="text-center mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Todo APP</h2>
            <h3>Todo delete</h3>

            <form action="#" onSubmit={submitHandler} autoComplete='off' ref={form}>
              <input
                type="text"
                name="task"
                className="px-2"
                onChange={changeHandler}
                required
                autoComplete="off"
              />
              <input
                type="submit"
                value="add"
                name="add"
                className="px-3 m-2"
              />
            </form>
          </div>
        </div>

    <TodoDel tododata={todos} deleteHandler={deleteHandler} />


      </div>
    </div>
  );
};

export default TodoTlg;
