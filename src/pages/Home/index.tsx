import React from "react";
import { AddTodo } from "../../component/AddTodo";
import { Box } from "@mui/material";
import { TodoWrapper } from "../../component/Todo/TodoWrapper";

export const Home = () => {
  return (
    <Box margin={2}>
      <AddTodo />
      <TodoWrapper />
    </Box>
  );
};
