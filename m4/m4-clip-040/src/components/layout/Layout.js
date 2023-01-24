import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeContext } from "../../App";

const Layout = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);
  const layoutVersion = "Layout Version 2.0";
  return (
    <div className="container" data-theme={darkTheme ? "dark" : "light"}>
      <Header layoutVersion={layoutVersion} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
