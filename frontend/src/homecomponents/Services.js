import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; //
import { BsArrowDownRightSquare, BsBank2, BsBuilding } from "react-icons/bs";
import { BiBuilding, BiBuildings } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";
import { FcProcess } from "react-icons/fc";
import { Link } from "react-router-dom";
import b4 from "../Images/b4.jpeg";
import avatar from "../Images/avatar.jpg";
import office from "../Images/office.jpeg";
import "./services.css";
import { FaShieldAlt, FaUsers, FaUserShield } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import ModalContact2 from "../components/ModalContact2";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-fluid padding3">
        {" "}
        <div className="center">
          <p className="color2 h1 bold-text">What Services We Offers</p>
          <p className=" mt-4 mx-5">
            Are you looking to set up a business in Dubai? Starting a business
            in Dubai is easy with help from the right professionals. Loram
            offers the best and economical business setup services
          </p>
          <p className="bold-text h4 mt-4 text-secondary">
            Choose your business need in Dubai or UAE to continue
          </p>
        </div>
        <br></br>
        <div className="row" data-aos="fade-up-left" data-aos-duration="3000">
          <div className="col-lg-4 mt-5">
            {" "}
            <div className="card-small-2 zoom">
              <div className="center">
                <br></br>
                <center>
                  <FcProcess fontSize="90px" />
                </center>
                <br></br>
                <br></br>
                <h3 className=" h3 bold-text">FAST PROCESS</h3>
                <br></br>

                <p>
                  Providing insight-driven transformation to investment banks,
                  wealth and asset managers, exchanges, clearing houses.
                </p>
                <br></br>
                <ModalContact2 />
                <br></br>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            {" "}
            <div className="card-small-2 zoom">
              <div className="center">
                <br></br>
                <center>
                  <FcProcess fontSize="90px" />
                </center>
                <br></br>
                <br></br>
                <h3 className=" h3 bold-text">FAST PROCESS</h3>
                <br></br>

                <p>
                  Providing insight-driven transformation to investment banks,
                  wealth and asset managers, exchanges, clearing houses.
                </p>
                <br></br>
                <ModalContact2 />
                <br></br>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card-small-2 zoom">
              <div className="center">
                <br></br>
                <center>
                  <TbCertificate fontSize="90px" color="#8D3DAF" />
                </center>
                <br></br>
                <br></br>
                <h3 className=" h3 bold-text">LICENSING</h3>
                <br></br>

                <p>
                  Providing insight-driven transformation to investment banks,
                  wealth and asset managers, exchanges, clearing houses.
                </p>
                <br></br>
                <ModalContact2 />
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up-left" data-aos-duration="3000">
          <div className="col-lg-4">
            <div className="card-small-2 zoom mt-5">
              <div className="center">
                <br></br>
                <center>
                  <FcProcess fontSize="90px" />
                </center>
                <br></br>
                <br></br>
                <h3 className="h3 bold-text">Fast Process</h3>
                <br></br>

                <p>
                  Providing insight-driven transformation to investment banks,
                  wealth and asset managers, exchanges, clearing houses.
                </p>

                <br></br>
                <ModalContact2 />
                <br></br>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card-small-2 zoom">
              <div className="center">
                <br></br>
                <center>
                  <FcProcess fontSize="90px" />
                </center>
                <br></br>
                <br></br>
                <h3 className=" h3 bold-text">Fast Process</h3>
                <br></br>

                <p>
                  Providing insight-driven transformation to investment banks,
                  wealth and asset managers, exchanges, clearing houses.
                </p>
                <br></br>
                <ModalContact2 />
                <br></br>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card-small-2 zoom">
              <div className="center">
                <br></br>

                <center>
                  <FcProcess fontSize="90px" />{" "}
                </center>
                <br></br>
                <br></br>
                <h3 className=" h3 bold-text">Fast Process</h3>
                <br></br>

                <p>
                  Providing insight-driven transformation to investment banks,
                  wealth and asset managers, exchanges, clearing houses.
                </p>
                <br></br>

                <ModalContact2 />
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid">
        <div
          className="row center color4"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="padding">
            <h1 className="text-white h1">That is why we’re here.</h1>
            <br></br>
            <p className="text-white h5" style={{ fontWeight: "lighter" }}>
              We make it simpler and easier for you. Before you do anything,
              <br></br>
              talk to one of our Company Formation Specialists.
            </p>
            <br></br>

            <ModalContact2 />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="container">
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-lg-6 col-xl-4 col-md-6 mt-5">
            <center>
              <div className="box">
                <div className="imgBox">
                  <div className="back-img-3">
                    <h1 className="heading h1"> FREEZONE </h1>
                    <center>
                      <h1 className="display h1">
                        {" "}
                        <BsArrowDownRightSquare />
                      </h1>
                    </center>
                  </div>
                </div>
                <div className="content shadow">
                  <h2 className="bold-text d-flex">
                    <BsBuilding
                      fontSize="40px"
                      className="mx-2 bold-text"
                      color="purple"
                    />
                    FREEZONE LICENSE
                    <br />
                  </h2>
                </div>
              </div>
            </center>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6  mt-5 center">
            <center>
              <div className="box">
                <div className="imgBox">
                  <div className="back-img-2">
                    <h1 className="heading h1" style={{}}>
                      MAINLAND{" "}
                    </h1>
                    <center>
                      <h1 className="display h1">
                        {" "}
                        <BsArrowDownRightSquare />
                      </h1>
                    </center>
                  </div>
                </div>
                <div className="content shadow">
                  <h2 className="bold-text d-flex">
                    <BiBuildings
                      fontSize="40px"
                      className="mx-2 bold-text"
                      color="purple"
                    />
                    MAINLAND LICENSE
                    <br />
                  </h2>
                </div>
              </div>
            </center>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6  mt-5 center">
            <center>
              <div className="box">
                <div className="imgBox">
                  <div className="back-img-1">
                    <h1 className="heading h1">OFFSHORE </h1>
                    <center>
                      <h1 className="display h1">
                        {" "}
                        <BsArrowDownRightSquare />
                      </h1>
                    </center>
                  </div>
                </div>
                <div className="content shadow">
                  <h2 className="bold-text d-flex">
                    <BiBuilding
                      fontSize="40px"
                      className="mx-2 "
                      color="purple"
                    />{" "}
                    OFFSHORE LICENSE
                    <br />
                  </h2>
                </div>
              </div>
            </center>
          </div>

          <br></br>
          <br></br>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            <br></br>
            <h1 className="color2 h1" style={{ fontWeight: "bold" }}>
              Start a Business in Dubai & UAE with Loram
            </h1>
            <p className="text-secondary">
              Loram provide a wide range of business setup services in Dubai and
              UAE for startups, medium enterprises and large business concerns.
              An amalgamation of trust and quality is the trademark of our
              Business setup services. And this is not just a marketing gimmick,
              but our proven growth-formula to be precise. Loram offer business
              setup services related to Mainland, Free zone and Offshore
              business set up right from the very basics to Licensing, License
              renewal and a lot more. We consider the success and growth of the
              clients as the greatest reward. We serve as a helping hand for our
              esteemed clients and provide prompt recommendations and support.
              Finding a UAE national sponsor is one of our prestigious services.
              Other services that we offer are Brand Protection, Bank account
              opening, PRO Services, Company liquidation and many more.
            </p>
            <br></br>

            <ModalContact2 />
          </div>

          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
            <br></br>

            <img src={b4} className="img-fluid rounded" alt="error" />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row" data-aos="fade-up-left" data-aos-duration="3000">
          <div className="col-lg-2 col-md-4 center zoom mt-2 color-hover">
            <center>
              <TbCertificate className="icon-service" />
            </center>
            <h4 className="text-secondary h4">TRADE</h4>
            <h3 className="bold-text color-hover h3">LICENSE</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom mt-2 color-hover">
            <center>
              <FaUserShield className="icon-service" />
            </center>
            <h4 className="text-secondary h4">FIND A</h4>
            <h3 className="bold-text color-hover h3">SPONSOR</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom mt-2 color-hover">
            <center>
              <GiTakeMyMoney className="icon-service" />
            </center>
            <h4 className="text-secondary h4">COMPANY</h4>
            <h3 className="bold-text h3 ">LIQUIDATION</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom mt-2 color-hover">
            <center>
              <FaShieldAlt className="icon-service" />
            </center>
            <h4 className="text-secondary h4">BRAND</h4>
            <h3 className="bold-text color-hover h3">PROTECTION</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom  mt-2 color-hover">
            <center>
              <BsBank2 className="icon-service" />
            </center>
            <h5 className="text-secondary h4"> BANK ACCOUNT</h5>
            <h3 className="bold-text color-hover h3">OPENING</h3>
          </div>
          <div className="col-lg-2 col-md-4 center zoom  mt-2 color-hover">
            <center>
              <FaUsers className="icon-service" />
            </center>
            <h4 className="text-secondary h4"> PRO</h4>
            <h3 className="bold-text color-hover h3">SERVICES</h3>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>

      <br></br>

      <div className="back-img-5">
        <p className="h1  mx-1  bold-text">Business Setup Guide</p>
        <br></br>
        <div className="row ">
          <div
            className="col-lg-4 col-md-12 mt-2"
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            <div className="back zoom ">
              <div className="border-class">
                <h2 className="bold-text h2">Why ?</h2>
                <br></br>

                <h5 className="h5">
                  Dubai has undergone a steady metamorphosis from a Petroleum
                  dependent economy to an innovation and
                  technology-driven........
                </h5>
                <br></br>

                <Link to="/why" className="h5 link-dec">
                  Know more <span className="display-2 ">{">>>>"} </span>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 mt-2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="back zoom">
              <div className="border-class">
                <h2 className="bold-text h2">Where ?</h2>
                <br></br>

                <h5 className="h5">
                  You have a plethora of business investment opportunities in
                  Dubai. One of the major prerequisites that every investor
                  or..........
                </h5>
                <br></br>

                <Link className="h5 link-dec" to="/where">
                  Know more <span className="display-2">{">>>>"} </span>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-12 mt-2"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
            <div className="back zoom">
              <div className="border-class">
                <h2 className="bold-text h2">How ?</h2>
                <br></br>

                <h5 className="h5">
                  Both economic and political stability plays a vital role in
                  the overall progress of any region or country. Dubai has a
                  very professional...........
                </h5>
                <br></br>

                <Link to="/how" className="h5 link-dec">
                  Know more <span className="display-2">{">>>>"} </span>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 "
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            <br></br>
            <img src={office} alt="error" className="img-fluid rounded zoom" />
          </div>
          <div
            className="col-lg-8"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
            <h1 className="color2 bold-text h1 margit-top ">Office Spaces</h1>
            <br></br>
            <p className="text-secondary size-para">
              Starting a business in Dubai or anywhere in UAE with Loram in
              simple and time-saving. We help you set up a company in a free
              zone, on mainland or offshore. “According to the data revealed by
              the BRL sector Dubai, more than 9500 new licenses were granted
              during the first 4 months of the year 2019.” People have their own
              perspectives and perceptions of Dubai particularly when it comes
              to business setup and getting an office space. But it is necessary
              to have the right advice from the right source before you set up a
              business in Dubai. To start a business in Dubai and UAE, you are
              supposed to seek advice only from an individual who works 24* 7 in
              the field of business setup, as the subject deals with legal
              issues and complicated norms. Loram Business Set Up Consultants
              have a proven track record in providing expert suggestions when it
              comes to business set up in Dubai and UAE. Our highly experienced
              Business Set Up specialistes give you the support and services to
              help you with company formation in Dubai and other related
              services across the Emirates.
            </p>
            <br></br>
            <br></br>
            <ModalContact2 />
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container-fluid padding2">
        <div className="mx-5">
          <h1 className="bold-text color h1">Testimonials</h1>
          <br></br>
          <h5 className="h5 ">
            We regard the client testimonial as a treasured token of
            appreciation that signifies our value as a Business Setup service
            provider. As you all know credible testimonials build “Trust” – one
            of the core business virtues that we cherish.
          </h5>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Swiper
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 2,
            },
          }}
          name="mySwiper"
          className="mx-5"
        >
          <SwiperSlide>
            <div
              className="center3 hover-underline-animation "
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "3%",
                paddingBottom: "0%",
              }}
            >
              <p className=" ">
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
              </p>
              <br></br>
              <div className="d-flex">
                <img src={avatar} alt="error" className="avatar" />
                <div className="mx-3 mt-3">
                  {" "}
                  <p className="bold-text ">
                    Mr.Jhon deo <br></br>{" "}
                    <span className="h5 text-secondary">
                      Manager of Holidng Group
                    </span>
                  </p>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="center3 hover-underline-animation "
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "3%",
                paddingBottom: "0%",
              }}
            >
              <p className=" ">
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
              </p>
              <br></br>
              <div className="d-flex">
                <img src={avatar} alt="error" className="avatar" />
                <div className="mx-3 mt-3">
                  {" "}
                  <p className="bold-text ">
                    Mr.Jhon deo <br></br>{" "}
                    <span className="h5 text-secondary">
                      Manager of Holidng Group
                    </span>
                  </p>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div
              className="center3 hover-underline-animation"
              style={{
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingTop: "3%",
                paddingBottom: "0%",
              }}
            >
              <p className=" ">
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
                “Spend a lot of time talking to customers face-to-face. You’d be
                amazed how many companies don’t listen to their customers.”
              </p>
              <br></br>
              <div className="d-flex">
                <img src={avatar} alt="error" className="avatar" />
                <div className="mx-3 mt-3">
                  {" "}
                  <p className="bold-text ">
                    Mr.Jhon deo <br></br>{" "}
                    <span className="h5 text-secondary">
                      Manager of Holidng Group
                    </span>
                  </p>
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Services;
