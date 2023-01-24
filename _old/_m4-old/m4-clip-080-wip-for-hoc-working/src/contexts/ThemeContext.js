import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function withTheme(Component) {
  return (props) => {
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    return (
      <Component {...props} darkTheme={darkTheme} toggleTheme={toggleTheme} />
    );
  };
}

// import { useState, createContext } from "react";

// export const ThemeContext = createContext({});

// export const ThemeProvider = ({children}) => {
//   const [darkTheme, setDarkTheme] = useState(false);
//   const toggleTheme = () => {
//     setDarkTheme(!darkTheme);
//   };
//   return (
//     <ThemeContext.Provider
//         value={{ darkTheme, toggleTheme }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   )
// };
