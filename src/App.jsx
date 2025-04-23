import React from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experiance />
        <Contact />
      </div>
      <Toaster />
    </>
  );
}

export default App;
