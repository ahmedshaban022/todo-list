import React from "react";
import { AddTodo } from "../../component/AddTodo";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Box margin={2}>
      <AddTodo />
    </Box>
  );
};
