import { useAlert } from "./AlertContext";

export function Alert() {
  const alert = useAlert();

  // @ts-ignore
  if (!alert.visible) return null;

  return (
    <div
      className="bg-red-500 text-white p-3 rounded mb-4"
      // @ts-ignore
      onClick={alert.toggle}
    >
      <p>Really important message</p>
    </div>
  );
}
