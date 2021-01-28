import React from "react";
import Layout from "../components/layout";
import { Router } from "@reach/router";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import Projects from "../components/Projects";
import About from "../components/About";
import Contacts from "../components/Contacts";

const index = () => {
   return (
      <Layout>
         <Router>
            <MainSection path="/" />
            <About path="/about" />
            <Projects path="/projects" />
            <Contacts path="/contacts" />
         </Router>
      </Layout>
   );
};

export default index;
