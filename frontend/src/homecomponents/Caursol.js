import React from "react";
import "./caursal.css";

import longcloud from "../Images/LOWER-CLOUD.png";
import cl from "../Images/cl-1.png";
const Caursol = () => {
  return (
    <>
      <div>
        <div className="sky1 img-fluid">
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
      </div>
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
    </>
  );
};

export default Caursol;
