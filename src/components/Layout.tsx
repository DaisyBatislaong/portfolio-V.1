import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
   return (
      <body>
         <Navbar />
         <section className="mt-16 flex flex-col">{children}</section>
      </body>
   );
};

export default Layout;
