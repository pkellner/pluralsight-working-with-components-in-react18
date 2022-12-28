import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import {ThemeContext} from "../../contexts/ThemeContext";

const Layout = (props) => {
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

export default Layout;
