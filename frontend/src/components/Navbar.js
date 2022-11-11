import React from "react";
import "./navbar.css";
import { useEffect, useState } from "react";

import logo from "../Images/logo.png";

import AOS from "aos";
import "aos/dist/aos.css"; //
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowDropRightFill } from "react-icons/ri";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  //   const [showComponent, setshowComponent] = useState("start");

  //   const [color, setColor] = useState(false);

  // useEffect(() => {
  //   setshowComponent("start");
  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  //   const changeColor = () => {
  //     if (window.scrollY >= 50) {
  //       setColor(true);
  //     } else {
  //       setColor(false);
  //     }
  //   };
  //   window.addEventListener("scroll", changeColor);

  return (
    <section className="header ">
      <a href="/" className="">
        <img src={logo} alt="error" className="logo" />
      </a>

      <nav className={showMediaIcons ? "navbar active" : "navbar"}>
        <ul className="menu">
          <li>
            <div className="dropdown">
              <a href="/" className="dropbtn">
                Business-Guide <MdArrowDropDown />
              </a>
              <div className="dropdown-content">
                <li>
                  <a href="/">Where</a>{" "}
                </li>
                <li>
                  <a href="/">How</a>{" "}
                </li>
                <li>
                  <a href="/">May</a>{" "}
                </li>
              </div>
            </div>
          </li>

          <li>
            <div className="dropdown">
              <a href="/" className="dropbtn">
                Licensing <MdArrowDropDown />
              </a>
              <div className="dropdown-content">
                <li className="dropdown2">
                  <a href="/" className="d-flex">
                    Mainland License{" "}
                    <RiArrowDropRightFill fontSize="20px" className="mt-1 " />{" "}
                  </a>
                  <ul className="dropdown-content2">
                    <li>
                      <a href="/">Professional</a>{" "}
                    </li>
                    <li>
                      <a href="/">Commercial License</a>{" "}
                    </li>
                    <li>
                      <a href="/">Industrial License</a>{" "}
                    </li>
                    <li>
                      <a href="/">Tourism License</a>{" "}
                    </li>
                    <li>
                      <a href="/">E Trader Lincense</a>{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Free zone License</a>{" "}
                </li>
                <li>
                  <a href="/">Offshore License</a>{" "}
                </li>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="/" className="dropbtn">
                Visa <MdArrowDropDown />
              </a>
              <div className="dropdown-content">
                <li>
                  <a href="/">Dubai-Business visa</a>{" "}
                </li>
                <li>
                  <a href="/">Dubai-Investi visa</a>{" "}
                </li>
              </div>
            </div>
          </li>
          <li>
            <a href="/">About US </a>{" "}
          </li>
          <li>
            <a href="/">Blog </a>{" "}
          </li>
        </ul>

        <AiOutlineClose
          className="display  mx-3"
          onClick={() => setShowMediaIcons(false)}
        />
      </nav>
      <div className="hamburger-menu mt-1">
        <button
          className="icons"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <GiHamburgerMenu className="icons" />
        </button>
      </div>
    </section>
  );
};

export default Navbar;
