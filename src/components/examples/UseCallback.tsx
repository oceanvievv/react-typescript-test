import { useCallback, useState } from "react";
import ItemsList from "../ItemsList";

export function UseCallback() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "red" : "black",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill("").map((_, i) => `Element ${i + 1}`);
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 style={styles}>Els counter: {count}</h1>
      <button
        className="px-4 py-2 border rounded bg-blue-400"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="px-2 py-4 border rounded bg-blue-400"
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}
