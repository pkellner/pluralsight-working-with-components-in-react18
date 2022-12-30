// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
//
// export const withTheme = (Component) => {
//   function Func(props) {
//     const ctx = useContext(ThemeContext)
//     return <Component {...props} darkTheme={ctx.darkTheme} toggleTheme={ctx.toggleTheme}/>
//   }
//   return Func;
//
// }

// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
//
// export const withTheme = (Component) => {
//   return (props) => {
//     const ctx = useContext(ThemeContext)
//     return <Component {...props} darkTheme={ctx.darkTheme} toggleTheme={ctx.toggleTheme}/>
//   }
// }

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const withTheme = (Component) => {
  return Func
  function Func(props) {
    const ctx = useContext(ThemeContext)
    return <Component {...props} darkTheme={ctx.darkTheme} toggleTheme={ctx.toggleTheme}/>
  }
}
