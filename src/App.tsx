import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import { Card, Container } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { Header } from "./component/Header";
import { AnimatedBackGround } from "./component/AnimatedBackGround";
import { AnimatedBackGroundSquares } from "./component/AnimatedBackGroundSquares";

function App() {
  return (
    <>
      {/* <AnimatedBackGround /> */}
      <AnimatedBackGroundSquares />
      <Container>
        <Header />

        <Home />
        <Toaster position="top-center" reverseOrder={false} />
      </Container>
    </>
  );
}

export default App;
