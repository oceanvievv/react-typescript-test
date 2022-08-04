import { useAlert } from "./alert/AlertContext";

export function Main() {
  // @ts-ignore
  const { toggle } = useAlert();

  return (
    <div className="text-center">
      <h1 className="text-lg font-bold">Use Context Example</h1>
      <button
        onClick={toggle}
        className="px-4 py-2 rounded border bg-blue-400 mt-5 mb-5"
      >
        Show Alert
      </button>
    </div>
  );
}
