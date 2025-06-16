import './App.css';
import React, { useState } from "react";
import { pickComputerMove, WinCalc, iconFor } from "./components";

export function Input() {
  const [result, setResult] = useState("");

  return (
    <>
  <button onClick={() => setResult(WinCalc("rock"))}>
    <span style={{ fontSize: "60px" }}>⛰️</span>
  </button>
  <button onClick={() => setResult(WinCalc("paper"))}>
    <span style={{ fontSize: "60px" }}>📄</span>
  </button>
  <button onClick={() => setResult(WinCalc("scissors"))}>
    <span style={{ fontSize: "60px" }}>✂️</span>
  </button>
  <div>{result}</div>
</>

  );
}

function App() {
  return (
    <>
      <h1>Rock Paper Scissors</h1>
      <Input />
    </>
  );
}

export default App;
