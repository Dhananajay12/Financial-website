import React from "react";
import "./contact.css";
import advice from "../Images/advice.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container-fluid color4 contact-us">
        <h1 className="bold-text mx-2 text-white">Get Started Today!</h1>
        <br></br>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="input-fluid mt-2">
              <p className="paragraph-small">FullName:</p>
              <input
                type="text"
                name="user_name"
                id=""
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="input-fluid mt-2">
              <p className="paragraph-small">LastName:</p>
              <input
                type="text"
                name="user_name"
                id=""
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="input-fluid mt-2">
              <p className="paragraph-small">Phone:</p>

              <input
                type="text"
                name="user_name"
                id=""
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="input-fluid mt-2">
              <p className="paragraph-small">Email:</p>

              <input
                type="text"
                name="user_name"
                id=""
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="input-fluid mt-2">
            <p className="paragraph-small">Message:</p>
            <input
              type="text"
              name="user_name"
              id=""
              className="form-control"
            />
          </div>
        </div>
        <br></br>
        <div className="row mx-2 text-white">
          <p>
            <input
              type="checkbox"
              name="vehicle1"
              value="Bike"
              className="mx-2"
            />
            By checking this box , I understand and acknowledge that the
            information shared above is genuine to the best of my knowledge.
          </p>
          <p className="mx-2">
            This site is protected by reCAPTCHA and the Google
            <Link to="/" className="mx-1">
              Privacy Policy{" "}
            </Link>
            and{" "}
            <Link to="/" className="mx-1">
              Terms{" "}
            </Link>{" "}
            of Service apply.
          </p>

          <button
            className="button-effect-white  fill2 mx-2 "
            style={{ width: "15rem" }}
          >
            CONTACT NOW
          </button>
        </div>
      </div>
      <div className="container-fluid padding-2">
        <div className="d-flex">
          <img src={advice} alt="error" style={{ width: "200px" }} />

          <div>
            <br></br>
            <h3 className="mt-5">
              Seek expert advice from our experienced professionals. <br></br>
              Call +971 522 407 111
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
