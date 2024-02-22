import "./App.css";
import { useState } from "react";
import { evaluate } from 'mathjs';

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setExpression(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const calculatedResult = evaluate(expression);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="calculator">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={expression}
          onChange={handleChange}
          placeholder="Enter expression"
        />
        <button type="submit">Calculate</button>
      </form>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
