import { useEffect, useMemo, useState } from "react";

function complexCompute(num: number) {
  console.log("Computing...");
  let i = 0;
  while (i < 1000000000) i++;

  return num * 2;
}

export function UseMemo() {
  const [number, setNumber] = useState(42);
  const [coloured, setColoured] = useState(false);

  const styles = useMemo(
    () => ({
      color: coloured ? "green" : "black",
    }),
    [coloured]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);
  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1>Computed prop: {computed}</h1>
      <button
        className="py-2 px-4 border rounded bg-blue-400"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="py-2 px-4 border bg-blue-400"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Substract
      </button>
      <button
        style={styles}
        className="py-2 px-4 border bg-blue-400"
        onClick={() => setColoured((prev) => !prev)}
      >
        Change color
      </button>
    </div>
  );
}
