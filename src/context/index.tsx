"use client";

import React, { createContext } from "react";

export const GlobalContext = createContext<null | {}>(null);

export const GlobalState = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
