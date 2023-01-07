import { useDebugValue, useState } from "react";

export default function useTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const value = {
    darkTheme,
    toggleTheme,
  };

  useDebugValue(`theme:${darkTheme ? "dark" : "light"}`);

  return value;
}
