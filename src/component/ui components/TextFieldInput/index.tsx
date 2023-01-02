import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";

type TextFieldInputProps = {
  title: string;
  error: boolean;
  handleChange: (title: string) => void;
  handleSubmit: () => void;
};
export default function TextFieldInput({
  title,
  error,
  handleChange,
  handleSubmit,
}: TextFieldInputProps) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            name="todo-title"
            error={error}
            id="outlined-error"
            label={"Enter Your Todo "}
            value={title}
            onChange={(e) => handleChange(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            sx={{ height: "100%", backgroundColor: "green" }}
            onClick={handleSubmit}
          >
            Add Todo
          </Button>
        </Grid>
        {error ? (
          <Grid xs={12}>
            <Typography variant="caption" marginLeft={3} color={"red"}>
              Your Todo Length Must Be More Than 2
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
}
