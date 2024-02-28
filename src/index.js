import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Project from "./pages/project/Project.jsx";
import Contact from "./pages/contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    // this is code for the very first page when application will start using npm start
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutpage",
    element: <About />,
  },
  {
    path: "/servicespage",
    element: <Services />,
  },
  {
    path: "/projectpage",
    element: <Project />,
  },

  {
    path: "/contactpage",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
