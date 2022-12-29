import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function withTheme(Component) {
  return (props) => {
    const {darkTheme, toggleTheme} = useContext(ThemeContext);
    return (
      <Component {...props} darkTheme={darkTheme} toggleTheme={toggleTheme}/>
    );
  };
}

// export const withTheme = (Component) => (props) => {
//   const { darkTheme, toggleTheme } = useContext(ThemeContext);
//   return (
//     <Component {...props} darkTheme={darkTheme} toggleTheme={toggleTheme} />
//   );
// };
