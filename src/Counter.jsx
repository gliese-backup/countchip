const Counter = () => {
  return (
    <div className="flex items-center justify-center h-20 w-72 border-2 border-black rounded">
      <button className="bg-blue-500 text-white p-2 rounded-md">
        Increment
      </button>
      <p>Count: 0</p>
      <button className="bg-blue-500 text-white p-2 rounded-md">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
