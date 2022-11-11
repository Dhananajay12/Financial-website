import React from "react";
import Contact from "../components/Contact";
import Caursol from "../homecomponents/Caursol";
import Needs from "../homecomponents/Needs";
import Services from "../homecomponents/Services";

const Home = () => {
  return (
    <>
      <Caursol />
      <Needs />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
