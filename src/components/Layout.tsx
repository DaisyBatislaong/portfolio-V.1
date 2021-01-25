import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
   return (
      <div className="h-screen 2xl:container 2xl:mx-auto ">
         <Navbar />
         <main className="flex flex-col items-center justify-center h-5/6">{children}</main>
      </div>
   );
};

export default Layout;
