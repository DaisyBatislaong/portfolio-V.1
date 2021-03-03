import React from "react";
import About from "../components/About";
import MainSection from "../components/MainSection";
import Projects from "../components/Projects";
import { Router, Link } from "@reach/router";

const index = () => {
   return (
  
         <Router>
            <MainSection path="/" />
            <About path="/about" />
            <Projects path="/projects"/>
         </Router>
   );
};

export default index;
