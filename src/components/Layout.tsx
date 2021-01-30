import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
   return (
      <body className="h-screen 2xl:container 2xl:mx-auto w-auto">
         <Navbar />
         <main className="flex justify-center">{children}</main>
      </body>
   );
};

export default Layout;
