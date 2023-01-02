import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import { Card, Container } from "@mui/material";
import TodoItem from "./component/TodoItem";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { Header } from "./component/Header";

function App() {
  return (
    <Container>
      <Header />

      <Home />
      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
}

export default App;
