import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import SEO from "./SEO";

const Layout = () => {
   return (
      <div className="">
         <SEO title="" />
         <Navbar />
         <Projects />
      </div>
   );
};

export default Layout;
