import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./socialbar.css";

const SocialBAr = () => {
  return (
    <div>
      <div className="sticky-container">
        <ul className="sticky">
          <li className="d-flex" style={{ background: "#1f6c85" }}>
            <BsFillTelephoneInboundFill
              fontSize="40px"
              className="mx-2 mt-2"
              color="white"
            />
            <p className="mx-2 h5">
              <a href="https://twitter.com" rel="noreferrer" target="_blank">
                Contact us
                <br />
              </a>
            </p>
          </li>

          <li className="d-flex" style={{ background: "green" }}>
            <FaWhatsapp fontSize="40px" className="mx-2 mt-1" color="white" />
            <p className="mx-2 h4">
              <a
                href="https://plus.google.com"
                rel="noreferrer"
                target="_blank"
              >
                Chat With
                <br />
                Whatsapp
              </a>
            </p>
          </li>

          <li className="d-flex" style={{ background: "red" }}>
            <FaYoutube fontSize="40px" color="white" className="mx-2 mt-1" />
            <p className="mx-2 h5">
              <a href="http://www.youtube.com" rel="noreferrer" target="_blank">
                Subscribe on
                <br />
                YouYube
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialBAr;
