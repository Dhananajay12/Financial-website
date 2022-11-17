import React, { useEffect } from "react";
import Contact from "../components/Contact";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <p className="h1">About us Contant here</p>

      <Contact />
    </>
  );
};

export default About;
