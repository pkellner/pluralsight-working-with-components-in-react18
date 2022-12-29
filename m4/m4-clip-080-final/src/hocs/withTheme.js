import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";



export const withTheme = (WrappedComponent) => {
  return Func;
  function Func(props) {
    const ctx = useContext(ThemeContext)
    return <WrappedComponent {...props} darkTheme={ctx.darkTheme} toggleTheme={ctx.toggleTheme}/>
  }
}

// // works but with named eslint error
// export const withTheme = (WrappedComponent) => {
//   return function (props) {
//     const ctx = useContext(ThemeContext)
//     return <WrappedComponent {...props} darkTheme={ctx.darkTheme} toggleTheme={ctx.toggleTheme}/>
//   }
// }

// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
//
// function InnerComponent(props) {
//   const Component = props.Component;
//   const { darkTheme, toggleTheme } = useContext(ThemeContext);
//   return (
//     <Component
//       {...props.props}
//       darkTheme={darkTheme}
//       toggleTheme={toggleTheme}
//     />
//   );
// }
//
// export const withTheme = (Component) => {
//   return function f(props) {
//     return <InnerComponent props={props} Component={Component} />;
//   };
// };
