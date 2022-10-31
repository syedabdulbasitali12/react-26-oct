import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  return (
    <div className={flag ? "white" : "dark"}>
      The Theme is {flag ? "Bright" : "Dark"}
      <button onClick={() => setFlag(!flag)}>Click me</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
}

export default App;
