import React from "react";

import { RiArrowDropRightFill } from "react-icons/ri";
import Typical from "react-typical";
import bg from "../Images/bg03.png";

const SmallStrip = (prop) => {
  return (
    <>
      <div className="container-fluid " style={{ padding: "0" }}>
        <img src={bg} alt="error" className="img-fluid back-img shadow2" />

        <div className="icon-social-right h5 bold-text">
          <p>
            <Typical
              loop={Infinity}
              className=""
              steps={[`Home > ${prop.data2} > ${prop.data} `, 1000]}
            />
          </p>
          {/* <p className="d-flex mt-3 mx-4">
            {" "}
            Home <RiArrowDropRightFill fontSize="" className="" /> {prop.data2}{" "}
            <RiArrowDropRightFill fontSize="" className="" /> {prop.data}
          </p> */}
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default SmallStrip;
