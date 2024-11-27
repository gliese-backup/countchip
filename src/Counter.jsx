import { useState } from "react";

const Counter = () => {
  let [counter, updateCounter] = useState(40);

  // let stateValue = stateSeAayiHuiValue[0];
  // const updateKarneWalaFunction = stateSeAayiHuiValue[1];

  function handleClick() {
    updateCounter(counter + 1);
  }

  return (
    <div className="flex items-center justify-center h-20 w-72 border-2 border-black rounded">
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleClick}
      >
        Increment
      </button>
      <p>Count: {counter}</p>
      <button className="bg-blue-500 text-white p-2 rounded-md">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
