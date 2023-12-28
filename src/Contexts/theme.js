import { createContext, UseContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lgihtTheme: () => {},
});
