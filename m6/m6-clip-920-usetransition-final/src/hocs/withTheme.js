import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function withTheme(Component) {
  return ThemeComponent;
  
  // Need ThemeComponent so we are returning a proper component including name (for eslinter rules)
  function ThemeComponent(props) {
    const {darkTheme, toggleTheme} = useContext(ThemeContext);
    return (
      <Component {...props}
                 darkTheme={darkTheme}
                 toggleTheme={toggleTheme}
      ></Component>
    );
  }
}

export default withTheme;
