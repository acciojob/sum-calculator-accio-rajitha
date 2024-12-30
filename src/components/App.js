import React, { useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleInputChange = (e) => {
    const newNumber = e.target.value;
    if (newNumber) {
      const updatedNumbers = [...numbers, parseInt(newNumber)];
      setNumbers(updatedNumbers);
      setSum(updatedNumbers.reduce((acc, num) => acc + num, 0));
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <div>
        <h3>Sum: {sum}</h3>
      </div>
    </div>
  );
};

export default App;

/*
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */
   /* </div>
  )
}

export default App*/
