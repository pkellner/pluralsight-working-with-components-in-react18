import { useState } from "react";

const App = ({ darkTheme, toggleTheme }) => {
  //
  return (
    <div
      className="container"
      data-theme={darkTheme ? "dark" : "light"}
      onClick={toggleTheme}
    >
      My Site
    </div>
  );
};

const withTheme = (Component) => {
  function Func(props) {
    const [darkTheme, setDarkTheme] = useState(true);
    return (
      <Component
        {...props}
        darkTheme={darkTheme}
        toggleTheme={() => setDarkTheme(!darkTheme)}
      />
    );
  }
  return Func;
};

export default withTheme(App);
