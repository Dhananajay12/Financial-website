import React, { useEffect } from "react";
import Contact from "../components/Contact";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Contact />
    </>
  );
};

export default About;
