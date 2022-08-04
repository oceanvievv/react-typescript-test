import { useState } from "react";

export function UseState() {
  const btnClasses = ["py-2 px-4 border rounded mb-2 bg-blue-300"];

  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center mb-10">
      <h1 className="text-lg font-bold mb-4 mt-4">Counter: {count}</h1>

      <button
        className={btnClasses.join(" ")}
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setCount(count - 1)}
      >
        Remove
      </button>
    </div>
  );
}
