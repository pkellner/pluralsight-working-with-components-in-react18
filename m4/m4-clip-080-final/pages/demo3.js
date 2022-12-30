import { useState } from "react";

const App = ({ darkTheme, toggleTheme }) => {
  return (
    <div
      className="container"
      data-theme={darkTheme ? "dark" : "light"}
      onClick={toggleTheme}
    >
      <b>My Site</b>
      <br />
    </div>
  );
};

export default withTheme(App);

export function withTheme(Component) {
  function Func(props) {
    const [darkTheme, setDarkTheme] = useState(true);
    return (
      <Component
        {...props}
        darkTheme={darkTheme}
        toggleTheme={() => {
          setDarkTheme(!darkTheme);
        }}
      />
    );
  }
  
  return Func;
}


