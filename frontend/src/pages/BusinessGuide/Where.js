import React, { useEffect } from "react";
import Contact from "../../components/Contact";
import Needs from "../../homecomponents/Needs";
import img from "../../Images/b1.png";
import img1 from "../../Images/b4.png";

import SmallStrip from "../../components/SmallStrip";
const Where = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SmallStrip data={"Where"} data2={"Business-Guide"} />
      <br></br>
      <br></br>

      <div className="container-fluid padding3">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <img src={img} className="img-fluid rounded" alt="error" />
          </div>
          <div className="col-lg-8 col-md-6">
            <br></br>
            <p className="h1 bold-text color">
              Where to Start Business in Dubai?
            </p>
            <br></br>
            <br></br>
            <p>
              You have a plethora of business investment opportunities in Dubai.
              One of the major prerequisites that every investor or entrepreneur
              should perform before investing is RESEARCH. The investor may opt
              for a Mainland company option or select from a list of Free zone
              regions. And this selection must be done based on the type of
              business. When it comes to a mainland company, the Department of
              Economic Development (DED) is the license issuing authority.
              Mainland companies are free to operate anywhere in the UAE both in
              the local market and outside the UAE. There are no operational
              restrictions of any kind. Free zone regions are specially allotted
              or designated geographical regions identified by particular
              business activity. The business is limited to the type or
              activities specified by the concerned free zone authority. And the
              free zone authority of each Free zone serves as the license
              issuing authority. Free zone companies are allowed to conduct
              business operations inside the Free zone and outside UAE.
              Diversifying the business to other UAE markets is not possible in
              the case of Free zone companies. Offshore jurisdictions are
              specifically meant for Offshore companies that do not require a
              physical presence in the Emirates. Offshore companies are allowed
              to do business outside the UAE but not inside. Therefore, the
              investor should have a clear idea about what, where to start. Here
              Set up Services shall guide you through the task of what Dubai has
              to offer and where to form a company in Dubai.
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
      <Needs />
      <br></br>
      <br></br>
      <div className="container-fluid padding3">
        <div className="row">
          <center>
            <p className="h1 bold-text color">Mainland</p>
          </center>
          <p>
            When it comes to Mainland Companies, the foreign investor can now
            obtain the license under 100% ownership. The greatest benefit is
            that the mainland company can operate the business across the length
            and breadth of the UAE. Mainland company operations are not
            restricted to the geographical boundaries of the free zone. Here are
            the most preferred locations to start Mainland company in Dubai.
          </p>

          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid padding3">
        <div className="row">
          <center>
            <p className="h1 bold-text color">Free zone</p>
            <p>
              You may opt for any of the Free Zone regions listed below based on
              your business endeavour.
            </p>
          </center>

          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid padding3">
        <div className="row">
          <center>
            <p className="h1 bold-text color">Offshore</p>
            <p>
              An offshore company is preferred by those entrepreneurs and
              investors who need business confidentiality and asset protection.
              Offshore companies are also called Non-Resident companies and are
              not allowed to perform business transactions in the UAE. There are
              two jurisdictions that offer Offshore Company formation in the
              UAE. And they are JAFZA (Jebel Ali Free Zone Authority) and RAK
              (Rasal Al-Khaimah). Offshore companies require an Incorporation
              certificate to initiate the operations.
            </p>
          </center>

          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
          <div className="col-lg-4 col-md-6 col-xl-4 mt-4">
            <img src={img1} className="img-fluid" alt="error" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <Contact />
      <hr></hr>
    </>
  );
};

export default Where;
