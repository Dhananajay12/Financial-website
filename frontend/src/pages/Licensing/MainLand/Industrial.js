import React, { useEffect } from "react";
import img from "../../../Images/b3.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import Contact from "../../../components/Contact";
import SmallStrip from "../../../components/SmallStrip";

const Industrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SmallStrip data={"Industrial"} data2={"Licensing"} />
      <br></br>
      <br></br>
      <div className="container-fluid padding3">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4">
            <img src={img} alt="error" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 col-lg-8 col-xl-8">
            <br></br>

            <p className="h1 bold-text color">
              Industrial License in Dubai, UAE
            </p>
            <br></br>
            <br></br>

            <p>
              Mainland company formation in Dubai can be a very lucrative
              investment option for investors and business establishments.
              Mainland companies are business entities that are allowed to
              function and operate within the boundaries of Emirati jurisdiction
              that come under commercialized geographical regions. In Dubai, all
              business entities that come under commercial, professional, and
              sole establishment registered under the Dubai Economic Department
              (DED) are known as Dubai Mainland License. Primary, possessing a
              Dubai mainland license helps you enjoy maximum freedom and
              flexibility to grow and operate your business. There are certain
              regulations and policies amended by the government that
              administers the operation of mainland companies in UAE. One of the
              most important governing laws associated with mainland business
              sets revolves around the company equity share. The implementation
              of reforms to the Commercial Companies Law with effect from June
              2021 by the Government of UAE will transform the future of
              business. The UAE government has allowed for 100% foreign
              ownership for the businesses located on the mainland. Earlier, the
              expat business owners were only allowed to own a maximum of
              4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM9Now,
              the foreigners opening a company in Dubai will no longer need an
              Emirati shareholder or agent under changes to UAE company law.
              Mainland company formation in Dubai, UAE gives you the freedom to
              extend your business’ branches to other parts of Dubai and across
              the UAE. The primary requirement for all business activities in
              the UAE is to own a license in any of the categories: Commercial,
              industrial and Professional. Kiltons Business Setup Services LLC
              provides business consultation for obtaining a Dubai mainland
              licence and to start your business in the most demanded locations
              of the UAE. We help you save time and cost of Dubai trade license,
              ensuring your mainland license in Dubai, UAE, is in accordance
              with the Dubai Economic Department.
            </p>
            <br></br>
            <br></br>
            <button className="button-effect-white fill2">CONTACT US</button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid padding3 ">
        <br></br>
        <div className="shadow">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="drop-para">
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="drop-para">
              <h2 className="h2">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="bold-text color font2"
                  >
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <Contact />
      <hr></hr>
    </>
  );
};

export default Industrial;
