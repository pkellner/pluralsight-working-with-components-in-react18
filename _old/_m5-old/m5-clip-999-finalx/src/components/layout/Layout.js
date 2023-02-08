import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeContext, ThemeProvider } from "../../contexts/ThemeContext";

function Inner(props) {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className="container" data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default function Layout(props) {
  return (
    <ThemeProvider>
      <Inner {...props} />
    </ThemeProvider>
  );
}
