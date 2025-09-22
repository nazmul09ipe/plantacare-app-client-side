import React from "react";
import { Outlet, ScrollRestoration, useNavigation } from "react-router";

import Footer from "../../Components/Footer";
import Navbar from "./../../Components/Navbar/Nav";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <ScrollRestoration />

      <Navbar />

      
        <main className="flex-grow">
          {state == "loading" ? <Loading></Loading> : <Outlet />}
        </main>

        <Footer />
      </div>
    
  );
};

export default HomeLayout;
