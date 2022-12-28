import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import {ThemeContext, ThemeProvider} from "../../contexts/ThemeContext";

const Inner = (props) => {
  const { darkTheme } = useContext(ThemeContext);
  const layoutVersion = "Layout Version 2.0";
  return (
    <div className="container" data-theme={darkTheme ? "dark" : "light"}>
      <Header {...props} layoutVersion={layoutVersion} />
      {props.children}
      <Footer />
    </div>
  );
};

// need props to pass through, otherwise, props.children will not include the children of this Layout
const Layout = (props) => {
  return (
    <ThemeProvider>
      <Inner {...props}></Inner>
    </ThemeProvider>
  )
}

export default Layout;
