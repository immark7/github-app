import React from "react";
import { ThemeProvider } from "./ThemeProvider";

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
