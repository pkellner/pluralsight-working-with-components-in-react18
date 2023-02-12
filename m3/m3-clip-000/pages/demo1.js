import { useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="container m-5">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div>Here is where blog posts would go...</div>
    </div>
  );
}

function Header({ darkTheme, toggleTheme }) {
  return (
    <>
      <b>My Blog</b>
      <hr />
    </>
  );
}
