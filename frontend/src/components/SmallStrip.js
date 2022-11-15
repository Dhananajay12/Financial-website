import React from "react";
import { BsBuilding } from "react-icons/bs";
import { BiBuilding, BiBuildings } from "react-icons/bi";
import { RiArrowDropRightFill } from "react-icons/ri";
const SmallStrip = (prop) => {
  return (
    <>
      <div className="container-fluid back-color ">
        <div className="just-con padding3 text-white ">
          <div className="d-flex h5 mt-5 text-block">
            Home <RiArrowDropRightFill fontSize="30px" className="" />{" "}
            {prop.data2} <RiArrowDropRightFill fontSize="30px" className="" />{" "}
            {prop.data}
          </div>
          <div className="d-flex text-white mt-1 ">
            <div
              className=" zoom "
              style={{
                background: "white",
                color: "purple",
                padding: "1rem",
              }}
            >
              <BsBuilding fontSize="60px" className="mt-2" />
              <p className="mt-1">
                MAINLAND <br></br>LICENSE
              </p>
            </div>
            <div className=" mx-1 zoom" style={{ padding: "1rem" }}>
              <BiBuilding fontSize="60px" />
              <p className="mt-1">
                MAINLAND <br></br>LICENSE
              </p>
            </div>
            <div
              className=" zoom"
              style={{ background: "white", color: "purple", padding: "1rem" }}
            >
              <BiBuildings fontSize="60px" />
              <p className="mt-1">
                MAINLAND <br></br>LICENSE
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallStrip;
