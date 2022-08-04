import { Alert } from "../alert/Alert";
import { Main } from "../Main";
import React from "react";
import { AlertProvider } from "../alert/AlertContext";

export function UseContext() {
  return (
    <AlertProvider>
      <div className="flex flex-col items-center mt-5">
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
}
