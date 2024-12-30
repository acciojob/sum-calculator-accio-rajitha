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
        <p>Sum: {sum}</p> {/* Changed text to match the test */}
      </div>
    </div>
  );
};

export default App;

