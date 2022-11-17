import React, { useEffect } from "react";
import "./caursal.css";
import AOS from "aos";
import "aos/dist/aos.css"; //
import longcloud from "../Images/LOWER-CLOUD.png";
import banner from "../Images/banner05.png";
import sun from "../Images/sun-1.png";
import b1 from "../Images/buil1.png";
import ModalContact2 from "../components/ModalContact2";
import Typical from "react-typical";
import { BsBuilding } from "react-icons/bs";
import { Link } from "react-router-dom";

const Caursol = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <div>
        <div className="sky1 img-fluid">
         
       
          <img className="img-circle" src={sun} alt="error"></img>
          <img className="img-circle" src={sun} alt="error"></img>

          <img height="50px" className="cloud-1" src={cl} alt="error"></img>
         <img height="50px" className="cloud-5" src={cl} alt="error"></img>
          <img height="50px" className="cloud-4" src={cl} alt="error"></img>
          <img height="50px" className="cloud-3" src={cl} alt="error"></img>
          <img height="50px" className="cloud-2" src={cl} alt="error"></img>
        </div>
        <div style={{ marginTop: "-11rem" }}>
          <img className="cloud-10" src={longcloud} alt="error"></img>
          <img className="cloud-6" src={longcloud} alt="error"></img>
          <img className="cloud-8" src={longcloud} alt="error"></img>
          <img className="cloud-7" src={longcloud} alt="error"></img>
          <img className="cloud-9" src={longcloud} alt="error"></img>
        </div>
      </div> */}

      <div className="container-banner">
        <img src={banner} alt="error" className="img-fluid img-size" />
        <div className="div-banner">
          {" "}
          <div>
            <p className="text-white font-size-slider bold-text d-flex">
              <BsBuilding className=" icon-banner" /> Banner
            </p>
          </div>
          <hr className="color-hr2" size="4px"></hr>
          <p className="text-small-banner1">2022</p>
          <p className="text-small-banner2">
            <Typical
              loop={Infinity}
              className="text-small-banner2"
              steps={[
                " HOW TO START YOUR COMPANY IN DUBAI",
                1000,
                "get flat 10% off for new arrivals",
                1000,
              ]}
            />
          </p>
          <p className="text-small-banner3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br></br> Lorem Ipsum has been the industry's standard
            dummy text ever since the<br></br> 1500s, when an unknown printer
            took a galley of type and scrambled it to <br></br> make a type
            specimen book.
          </p>
          <Link to="/about" className="button-effect-white3 fill4">
            Know More
            {/* <img src={logo} alt="error" className="logo" /> */}
          </Link>
        </div>
      </div>

      {/* <div className="banner1 ">
        <br></br>
        <div className="div-banner">
          {" "}
          <div data-aos="fade-left">
            <p className="text-white font-size-slider bold-text d-flex">
              <BsBuilding className="mx-4 mt-4" style={{ width: "6rem" }} />{" "}
              Banner
            </p>
          </div>
          <hr className="color-hr2" size="4px" style={{ width: "40rem" }}></hr>
          <p className="text-small-banner1">2022</p>
          <p className="text-small-banner2">
            <Typical
              loop={Infinity}
              className="text-small-banner2"
              steps={[
                " HOW TO START YOUR COMPANY IN DUBAI",
                1000,
                "get flat 10% off for new arrivals",
                1000,
              ]}
            />
          </p>
          <p className="text-small-banner3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br></br> Lorem Ipsum has been the industry's standard
            dummy text ever since the<br></br> 1500s, when an unknown printer
            took a galley of type and scrambled it to <br></br> make a type
            specimen book.
          </p>
          <br></br>
          <br></br>
          <Link to="/about" className="button-effect-white3 fill4">
            Know More
            <img src={logo} alt="error" className="logo" />
          </Link>
         </div> 
      </div> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
    </>
  );
};

export default Caursol;
