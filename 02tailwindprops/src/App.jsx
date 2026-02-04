import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-300 p-3">Vite with TAILWIND</h1>
      <Card username="Deba" bookName="Game of Thrones" />
      <Card username="Uday" bookName="LOTR" />
      <Card />
    </>
  );
}

export default App;
