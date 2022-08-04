import { useEffect, useRef, useState } from "react";

export function UseRef() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  // @ts-ignore
  const focus = () => inputRef.current.focus();

  useEffect(() => {
    renderCount.current++;
  });
  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">Render Count: {renderCount.current}</h1>
      <h2 className="text-lg">Previous state: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        className="border"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="py-2 px-4 border" onClick={focus}>
        Focus
      </button>
    </div>
  );
}
