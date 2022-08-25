import React from "react";

const TodoDel = (props) => {

  return (
    <div>
      {props.tododata.map((todo, index) => (
        <div key={index}>
            <h4>{todo} &nbsp; <button onClick={()=>props.deleteHandler(index)}>delete</button></h4>
        </div>
      ))}
    </div>
  );
};

export default TodoDel;
