import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects";


export const router = createBrowserRouter([
    {path:'/', element: <App />},
    {path:'/projects', element: <Projects />},
])