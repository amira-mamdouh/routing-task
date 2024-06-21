import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

export default function App() {
  const routing = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routing} />
    </>
  );
}
