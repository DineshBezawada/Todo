import "./App.css";
import TodoTlg from "./TodoComponents/TodoTlg";
import TodoList from "./Components/TodoList";
import Context from "./useContext/Context";
import Context2 from "./useContext/Context2";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [name, setName] = useState([]);


  return (
    <div>
      {/* <TodoList/>
    <TodoTlg /> */}
    <Context />
{/* 
      <UserContext.Provider value={name}>
        <Context  />
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
