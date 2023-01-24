import { useState, useDebugValue } from "react";

export default function useTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  useDebugValue(`Theme:${darkTheme ? "dark" : "light"}`, (val) => {
    if (val === "...") {
      return "Resut ...";
    } else {
      return "Other Result...";
    }
  });
  return {
    darkTheme,
    toggleTheme,
  };
}
