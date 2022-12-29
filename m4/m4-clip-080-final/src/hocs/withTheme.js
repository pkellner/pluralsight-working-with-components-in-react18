import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function InnerComponent(props) {
  const Component = props.Component;
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <Component
      {...props.props}
      darkTheme={darkTheme}
      toggleTheme={toggleTheme}
    />
  );
}

export const withTheme = (Component) => {
  return function f(props) {
    return <InnerComponent props={props} Component={Component} />;
  };
};
