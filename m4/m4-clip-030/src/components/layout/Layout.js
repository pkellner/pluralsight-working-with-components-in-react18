import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="container" data-theme={props.darkTheme ? "dark" : "light"}>
      <Header  toggleTheme={props.toggleTheme} darkTheme={props.darkTheme} />
      {props.children}
      <Footer />
    </div>
  )
};

export default Layout;
