import { createContext } from "react";
import logo from '../logo.svg'

const AppContext = createContext({
  sidebarMinified: "sidebar-minified-out",
  defaultImage: logo
});

export { AppContext };
