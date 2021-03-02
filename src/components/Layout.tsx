import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
   return (
      <body>
         <Navbar />
         <article className="mt-16 flex flex-col items-center">{children}</article>
         <Footer/>
      </body>
   );
};

export default Layout