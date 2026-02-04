import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-400 px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white"
            onClick={() => changeColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white"
            onClick={() => changeColor("green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
