import React, { useState } from "react";
import TextFieldInput from "../ui components/FormTextField";
import { toast } from "react-hot-toast";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (title: string) => {
    setTitle((s) => title);
    if (title.length < 3 && error === false) {
      setError(true);
      return false;
    } else if (title.length >= 3 && error === true) {
      setError(false);
    }
  };
  const handleSubmit = () => {
    if (title.length < 3) {
      toast.error("Todo title must be more than 2 characters ");
      setError(true);
    }
  };
  return (
    <TextFieldInput
      title={title}
      error={error}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};
