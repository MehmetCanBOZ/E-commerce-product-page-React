import { createContext,useState,useContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const [theme,setTheme] =useState(false);
  
  const data ={
    theme,setTheme
  }
  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeContextProvider,
  useContext
}