import React from "react";
import { useEffect, useState } from "react";
import "./need.css";
import AOS from "aos";
import "aos/dist/aos.css"; //
import { CgArrowLeft, CgArrowLeftO } from "react-icons/cg";
import { BsArrowLeftCircle, BsFillArrowLeftCircleFill } from "react-icons/bs";
import ModalContact from "../components/ModalContact";

const Needs = () => {
  const [showComponent, setshowComponent] = useState("start");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="center">
        <p className="color2 h1 bold-text">Business Set Up Services</p>
        <p className="padding-4 mt-4">
          Are you looking to set up a business in Dubai? Starting a business in
          Dubai is easy with help from the right professionals. Kiltons offers
          the best and economical business setup services
        </p>
        <p className="bold-text h4 mt-4 text-secondary">
          Choose your business need in Dubai or UAE to continue
        </p>
      </div>
      <br />
      <br />
      <br />
      <br></br>
      <div>
        {showComponent === "start" && (
          <>
            <div className="container-fluid padding3">
              <div className="row">
                <div
                  className="col-md-4 mt-2"
                  data-aos="fade-up-right"
                  data-aos-duration="3000"
                >
                  <div
                    onClick={() => setshowComponent("add-trip")}
                    className="card-small card color"
                  >
                    <p>I WANT TO START A COMPANY</p>

                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 mt-2"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div
                    onClick={() => setshowComponent("company")}
                    className=" card-small  card color"
                  >
                    <p>I ALREADY HAVE A COMPANY</p>
                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 mt-2"
                  data-aos="fade-up-left"
                  data-aos-duration="3000"
                >
                  <div
                    onClick={() => setshowComponent("third")}
                    className=" card-small card color"
                  >
                    <p>TALK TO OUR EXPERT</p>
                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {showComponent === "add-trip" && (
          <div
            className="container-fluid padding3 "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row ">
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up-right"
                data-aos-duration="3000"
              >
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>MAINLAND</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div
                  onClick={() => setshowComponent("third")}
                  className=" card-small card color"
                >
                  {" "}
                  <p>FREEZONE</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up-left"
                data-aos-duration="3000"
              >
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>OFFSHORE</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="div-icons">
                <BsArrowLeftCircle
                  className="icons-small zoom"
                  onClick={() => setshowComponent("start")}
                />
              </div>
              <center>
                <div
                  className="col-md-6 col-lg-4 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div
                    onClick={() => setshowComponent("third")}
                    className="card-small card color"
                  >
                    {" "}
                    <p>TALK TO OUR EXPERT</p>
                    <div className="go-corner">
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>
                <br></br>
                <button
                  className="button-effect fill"
                  onClick={() => setshowComponent("start")}
                >
                  BACK TO HOME
                </button>
              </center>
            </div>
          </div>
        )}
        {showComponent === "company" && (
          <div
            className="container-fluid padding3"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>I WANT TO RENEW MY LICENSE</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("sub-third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>I NEED TO MAKE CHANGES IN MY LICENSE</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>I WANT TO SELL MY LICENSE</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <center>
              <button
                className="button-effect fill"
                onClick={() => setshowComponent("start")}
              >
                BACK TO HOME
              </button>
            </center>
            <br></br>
          </div>
        )}
        {showComponent === "sub-third" && (
          <div
            className="container-fluid padding3"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>I WANT TO CCHANGE MY LOCATION</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("sub-third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>I WANT TO CHANGES MY LOCAL SPONSOR</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>I WANT TO ADD/CHANGE ACTIVITY</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>I WANT TO ADD/REMOVE PARTNER</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>OTHER CHANGES</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>TALK TO OUR EXPERT</p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <center>
              <button
                className="button-effect fill"
                onClick={() => setshowComponent("start")}
              >
                BACK TO HOME
              </button>
            </center>
            <br></br>
          </div>
        )}
        {showComponent === "third" && (
          <div
            className="container-fluid padding3"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="row">
              {/* <BsArrowLeftCircle
                className="icons-small zoom"
                onClick={() => setshowComponent("start")}
              /> */}
              <br></br>
              <br></br>
              <center>
                <div className="col-md-4" style={{ height: "100%" }}>
                  <ModalContact />
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <button
                    onClick={() => setshowComponent("start")}
                    className="button-effect fill"
                  >
                    Back to Home
                  </button>
                </div>
              </center>
            </div>
          </div>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Needs;
