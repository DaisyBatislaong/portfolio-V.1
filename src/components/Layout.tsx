import React from "react";
import Footer from "./footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
   return (
      <div className="flex flex-col min-h-screen">
         <Navbar />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
