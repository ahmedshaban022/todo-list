import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface TodoProps {
  title: string;
  description: string;
}

const TodoItem: React.FC<TodoProps> = ({ title, description }) => {
  const styles = {
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  };

  return (
    <Card sx={styles.root}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
