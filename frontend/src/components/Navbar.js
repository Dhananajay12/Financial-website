import React from "react";
import "./navbar.css";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; //
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowDropRightFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import ChakkraModal from "../homecomponents/ChakkraModal";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="header ">
        <Link to="/" className="margin-left-500" style={{ marginLeft: "1rem" }}>
          <p className="h1  bold-text color">LOGO </p>
        </Link>

        <nav className={showMediaIcons ? "navbar active" : "navbar"}>
          <ul className="menu">
            <li>
              <div className="dropdown">
                <Link to="/" className="dropbtn d-flex drop-link">
                  Business-Guide <MdArrowDropDown className="mt-1" />
                </Link>
                <div className="dropdown-content">
                  <li>
                    <Link to="/where">Where</Link>{" "}
                  </li>
                  <li>
                    <Link to="/how">How</Link>{" "}
                  </li>
                  <li>
                    <Link to="/why">Why</Link>{" "}
                  </li>
                </div>
              </div>
            </li>

            <li>
              <div className="dropdown">
                <Link to="/" className="dropbtn d-flex drop-link">
                  Licensing <MdArrowDropDown className="mt-1" />
                </Link>
                <div className="dropdown-content">
                  <li className="dropdown2">
                    <Link to="/mainland" className="d-flex">
                      Mainland License{" "}
                      <RiArrowDropRightFill fontSize="20px" className="mt-1 " />{" "}
                    </Link>
                    <ul className="dropdown-content2">
                      <li>
                        <Link to="/professional">Professional License</Link>{" "}
                      </li>
                      <li>
                        <Link to="/commericial">Commercial License</Link>{" "}
                      </li>
                      <li>
                        <Link to="/industrial">Industrial License</Link>{" "}
                      </li>
                      <li>
                        <Link to="/tourism">Tourism License</Link>{" "}
                      </li>
                      <li>
                        <Link to="/etrade">E Trader Lincense</Link>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/freezone">Free zone License</Link>{" "}
                  </li>
                  <li>
                    <Link to="/offshore">Offshore License</Link>{" "}
                  </li>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <Link to="/" className="dropbtn d-flex drop-link">
                  Visa <MdArrowDropDown className="mt-1" />
                </Link>
                <div className="dropdown-content">
                  <li>
                    <Link to="/businessvisa">Dubai-Business visa</Link>{" "}
                  </li>
                  <li>
                    <Link to="/investorvisa">Dubai-Investi visa</Link>{" "}
                  </li>
                </div>
              </div>
            </li>
            <li>
              <Link to="/about" className="drop-link">
                About US{" "}
              </Link>{" "}
            </li>
            <li>
              <Link to="/blog" className="drop-link">
                Blog{" "}
              </Link>{" "}
            </li>
            {/* <li>
            <ChakkraModal />
          </li> */}
          </ul>

          <AiOutlineClose
            className="display  mx-3"
            onClick={() => setShowMediaIcons(false)}
          />
        </nav>

        <ChakkraModal />

        <div className="hamburger-menu ">
          <Link onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className="icons " />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
