import { UseState } from "../components/examples/UseState";
import { UseEffect } from "../components/examples/UseEffect";
import { UseRef } from "../components/examples/UseRef";
import { UseMemo } from "../components/examples/UseMemo";
import { UseCallback } from "../components/examples/UseCallback";
import { UseContext } from "../components/examples/UseContext";

export function TestPage() {
  return (
    <div className="flex flex-col gap-5">
      <UseContext />
      <UseCallback />
      <UseMemo />
      <UseRef />
      <UseEffect />
      <UseState />
    </div>
  );
}
