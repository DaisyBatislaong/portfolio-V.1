import React from "react";
import About from "../components/About";
import MainSection from "../components/MainSection";
import Projects from "../components/Projects";

const index = () => {
   return (
      <React.Fragment>
         <MainSection />
         <About/>
         <Projects/>
      </React.Fragment>
   );
};

export default index;
