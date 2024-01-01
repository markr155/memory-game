import { useState } from "react";
import Header from "./Header";
import Scores from "./Scores";
import GameArea from "./GameArea";

function App() {
  return (
    <>
      <Header />
      <Scores />
      <GameArea />
    </>
  );
}

export default App;
