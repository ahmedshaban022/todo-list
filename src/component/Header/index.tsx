import { Box, Divider } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <Box p={2} sx={{ fontSize: "1.5rem", color: "white" }}>
      <h2>Todo-List</h2>
      <Divider />
    </Box>
  );
};
