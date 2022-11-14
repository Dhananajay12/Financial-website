import React, { useEffect } from "react";
import Contact from "../components/Contact";
import Caursol from "../homecomponents/Caursol";
import Needs from "../homecomponents/Needs";
import Services from "../homecomponents/Services";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Caursol />
      <Needs />
      <Services />
      <Contact />
      <hr></hr>
      <br></br>
      <div className="container">
        <div className="row mt-2">
          <p className="bold-text text-secondary">
            Kiltons Business Setup and Support Services
          </p>
          <p className="text-secondary">
            Are you planning for a business setup in Dubai/UAE? We can help you
            to set it up from the initial stages itself. Our team of
            professionals have exceptional knowledge and experience in setting
            up a business in Dubai. It will begin from finding a reliable
            sponsor for your business, obtaining a license and all the other
            formalities for successful inception and fruitful operation of your
            business in UAE. We will also guide you regarding the best type of
            license in Dubai depending on the choice of your business. There are
            three types of business licenses in UAE. Those are Mainland, Free
            Zone and Offshore licenses. Each type of license has its pros and
            cons. It is essential to understand the best option for your
            business. Thereby, you can enhance the profit possibilities to the
            optimum. Availing our services for company formation in Dubai/ UAE
            will be the right decision to start your dream journey towards
            business setup in Dubai.
          </p>
        </div>
        <div className="row  mt-2">
          <p className="bold-text text-secondary">Company Formation in Dubai</p>
          <p className="text-secondary">
            Dubai has been the most sought after destination for business
            organisations across the globe. It has played a pivotal role in the
            growth of some of the most prominent business firms. The federal
            laws in the United Arab Emirates have been conducive for the
            commencement of businesses. Hence, Dubai is the best option for
            anyone dreaming of a great future in business. The city with
            well-developed and superior infrastructure facilities offers the
            best atmosphere for businesses. With regulations that are
            advantageous for the firms to gain boundless profit and prosper, the
            influx of expats to begin business operations in Dubai has been
            increasing rapidly. You can establish a Mainland, Free Zone or
            Offshore Company in Dubai.
          </p>
        </div>
        <div className="row  mt-2">
          <p className="bold-text text-secondary">Licensing Services</p>
          <p className="text-secondary">
            Every business firm must possess a business license for operating in
            the UAE. The procedure for acquiring a business license in UAE will
            include approvals from ministries and departments according to the
            type of business. There are three types of business licenses, viz.
            Mainland, Free Zone and Offshore licenses. Mainland business has
            three more sub-types, Commercial License, Professional License and
            Industrial License. The official formalities towards license have to
            be followed judiciously to ensure receipt of license in time. All
            the documents submitted have to be translated into Arabic by an
            authorised agency. Any irregularity or discrepancy in the
            certificates and application can result in rejection of the request.
            Hence, the utmost care has to be taken whilst filling the forms and
            submitting those to the ministries and departments. Our
            professionals will get all the work done on behalf of you, in a
            time-bound manner for your business setup in Dubai.
          </p>
        </div>
        <div className="row  mt-2">
          <p className="bold-text text-secondary">Visa Services</p>
          <p className="text-secondary">
            UAE offers different types of visa based on your purpose of visit,
            such as business visa, tourist visa, employment visa and so on. Our
            major visa services encompass tourist visa, investor visa, work
            visa, family visa, business visa, maid visa, and more. You must
            possess an entry permit, UAE identity card and resident visa before
            applying for a work permit or labour card. Several offices and
            departments are involved in the processing and issuance of a visa.
            The submission of forms in Arabic, obtaining signatures and
            approvals may be tiresome for you. Being one of the most reputed
            visa services, you can assign it to us unconcerned. Our team will
            carry out the task as quickly as possible and deliver you the visa
            in the shortest possible time.
          </p>
        </div>
        <div className="row  mt-2">
          <p className="bold-text text-secondary">Sponsorship Services</p>
          <p className="text-secondary">
            Finding a local Emirati as your sponsor, for business setup in
            Dubai, is a daunting process. The local sponsor must be reliable and
            dependable. All the legal formalities and ownership agreements will
            be on the sponsor’s name. The risk factors involved can make you
            anxious. Forget the worries, once we are with you. We understand
            your worries. Kiltons will provide you with the most credible
            sponsor for your business formation in Dubai. With our assurance,
            you can forget all the apprehensions about the sponsor. And wholly
            focus on the development of your business. Consult our professional
            representative today to know more about our sponsorship services.
          </p>
        </div>
        <div className="row mt-2">
          <p className="bold-text text-secondary">Finance Services</p>
          <p className="text-secondary">
            You have come with high hopes for business formation in Dubai. To be
            successful and reach the top of the world. Money should not be a
            hindrance to achieve your goal. Our major financial services include
            accounting and bookkeeping, VAT registration and VAT return filing,
            Audit services, CFO services, Tax services, and more. We have our
            exclusive finance services for those who want financial support to
            set up a business in the UAE. Our easy to obtain and hassle-free
            service has been serving the clients since long. There are no
            complications or unnecessary fees involved in the process of
            financial services. The deal with us would be fast and transparent.
            Thereby, you can enter the world of business without any delay and
            start your dream journey towars business setup in Dubai.
          </p>
        </div>
      </div>
      <br></br>
      <hr></hr>
    </>
  );
};

export default Home;
