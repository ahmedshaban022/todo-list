import { Box } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";
import { useTodos } from "../../context/TodosContext";

export const TodoWrapper = () => {
  const { todos } = useTodos();

  return (
    <Box sx={{ marginTop: 2 }}>
      {todos.map((todo) => (
        <Box key={todo.id} sx={{ marginBottom: 2 }}>
          <TodoItem
            title={todo.title}
            description={todo.description}
          />
        </Box>
      ))}
    </Box>
  );
};
