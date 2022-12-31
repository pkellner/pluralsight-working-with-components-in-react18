import { useState } from "react";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div
      className="container"
      data-theme={darkTheme ? "dark" : "light"}
      onClick={() => setDarkTheme(!darkTheme)}
    >
      <b>My Site</b>
      <br />
    </div>
  );
};
