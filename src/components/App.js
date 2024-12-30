import React, { useState } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([]); // To store input numbers
  const [sum, setSum] = useState(0); // To store the sum of numbers

  const handleInputChange = (e) => {
    const newNumber = e.target.value;
    if (newNumber) {
      const updatedNumbers = [...numbers, parseInt(newNumber)];
      setNumbers(updatedNumbers);
      setSum(updatedNumbers.reduce((acc, num) => acc + num, 0)); // Update sum
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        onChange={handleInputChange} // On input change, update numbers and sum
        placeholder="Enter a number"
      />
      <div>
        <p>Sum: {sum}</p> {/* The <p> tag that Cypress tests will look for */}
      </div>
    </div>
  );
};

export default App;

/*
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
