"use client"
import { data, dataType } from "@/public/data";
import React from "react";

const AppContext = React.createContext({});
export default AppContext;

export const AppContextProvider = ({ children, }: { children: React.ReactNode; }) => {

  const [user, setUser] = React.useState<dataType[]>(data);
  

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
