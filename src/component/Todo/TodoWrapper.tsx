import { Box } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";

export const TodoWrapper = () => {
  return (
    <Box>
      <TodoItem
        title="NodeJs Requirements"
        description="Learn Nest JS and Graph Ql with Mongoose"
      />
    </Box>
  );
};
