import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import "./socialbar.css";

const SocialBAr = () => {
  return (
    <div>
      <div className="sticky-container">
        <ul className="sticky">
          {/* <li className="d-flex">
            <FaFacebook fontSize="50px" color="blue" />
            <p className="mx-2 h5">
              <a
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                Like Us on
                <br />
                Facebook
              </a>
            </p>
          </li> */}
          {/* <li className="d-flex">
            <FaTwitter fontSize="50px" color="#72acdd" />
            <p className="mx-2 h5">
              <a href="https://twitter.com" rel="noreferrer" target="_blank">
                Follow Us on
                <br />
                Twitter
              </a>
            </p>
          </li> */}

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
          {/* <li className="d-flex">
            <FaLinkedin fontSize="50px" color="blue" />
            <p className="mx-2 h5">
              <a
                href="https://www.linkedin.com/company"
                rel="noreferrer"
                target="_blank"
              >
                Follow Us on
                <br />
                LinkedIn
              </a>
            </p>
          </li> */}
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
