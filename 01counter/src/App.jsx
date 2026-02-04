import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 15; state will not update
  const [counter, setCounter] = useState(0);
  //1st value: variable; 2nd value: function
  //useState(0): means, counter = 0 initialized

  const addValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React with counter {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value:</button> {}
      <button onClick={removeValue}>Remove Value:</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
