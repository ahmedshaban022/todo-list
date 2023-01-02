import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import { Card } from "@mui/material";
import TodoItem from "./component/TodoItem";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Card>
        <h2>Todo-List</h2>
      </Card>
      <TodoItem />
      <Home />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
