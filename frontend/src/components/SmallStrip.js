import React from "react";

import { RiArrowDropRightFill } from "react-icons/ri";
import bg from "../Images/bg.png";

const SmallStrip = (prop) => {
  return (
    <>
      <div className="container-fluid " style={{ padding: "0" }}>
        <img src={bg} alt="error" className="img-fluid back-img shadow2" />

        <div className="icon-social-right h5 bold-text">
          <p className="d-flex mt-3 mx-4">
            {" "}
            Home <RiArrowDropRightFill fontSize="" className="" /> {prop.data2}{" "}
            <RiArrowDropRightFill fontSize="" className="" /> {prop.data}
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default SmallStrip;
