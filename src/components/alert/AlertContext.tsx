import React, { ReactNode, useContext, useState } from "react";

interface AlertProviderProps {
  children?: ReactNode;
}

// @ts-ignore
const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState(false);
  const toggle = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider
      value={{
        visible: alert,
        toggle,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
