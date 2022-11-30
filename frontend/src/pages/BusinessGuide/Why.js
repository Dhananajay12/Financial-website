import React, { useEffect } from "react";
import Contact from "../../components/Contact";
import ModalContact2 from "../../components/ModalContact2";
import SmallStrip from "../../components/SmallStrip";
import img1 from "../../Images/b4.png";
const Why = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SmallStrip data="Why" data2="Business-Guide" />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <img src={img1} alt="error" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 col-lg-6">
            <br></br>
            <p className="h1 bold-text color">
              Why start a Business in Dubai?{" "}
            </p>
            <br></br>
            <p>
              Business startup Dubai has always been encouraged in Dubai. The
              reasons to start a business in Dubai are umpteen. To name a few,
              the world-class infrastructure, skilled workforce, active
              transportation, easy access to billions of people, urban
              amenities, cosmopolitan culture are some of the major reasons why
              investors start a business in Dubai. Dubai has undergone a steady
              metamorphosis from a Petroleum dependent economy to an innovation
              and technology-driven business haven. And there are evident
              reasons why you should start a Business in Dubai. Here they are:
            </p>
            <br></br>
            <ModalContact2 />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact />
    </>
  );
};

export default Why;
