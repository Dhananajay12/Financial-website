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
          <li className="d-flex">
            <FaFacebook fontSize="50px" color="blue" />
            <p className="mx-2 h5">
              <a href="https://www.facebook.com" target="_blank">
                Like Us on
                <br />
                Facebook
              </a>
            </p>
          </li>
          <li className="d-flex">
            <FaTwitter fontSize="50px" color="#72acdd" />
            <p className="mx-2 h5">
              <a href="https://twitter.com" target="_blank">
                Follow Us on
                <br />
                Twitter
              </a>
            </p>
          </li>
          <li className="d-flex">
            <FaWhatsapp fontSize="50px" color="green" />
            <p className="mx-2 h4">
              <a href="https://plus.google.com" target="_blank">
                Chat With
                <br />
                Whatsapp
              </a>
            </p>
          </li>
          <li className="d-flex">
            <FaLinkedin fontSize="50px" color="blue" />
            <p className="mx-2 h5">
              <a href="https://www.linkedin.com/company" target="_blank">
                Follow Us on
                <br />
                LinkedIn
              </a>
            </p>
          </li>
          <li className="d-flex">
            <FaYoutube fontSize="50px" color="red" />
            <p className="mx-2 h5">
              <a href="http://www.youtube.com" target="_blank">
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
