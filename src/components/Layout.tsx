import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
   return (
      <div className="h-screen 2xl:container 2xl:mx-auto w-auto">
         <Navbar />
         <div className="flex flex-col items-center justify-center">{children}</div>
      </div>
   );
};

export default Layout;
