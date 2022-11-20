import React, { useState, useRef } from "react";
import "./contact.css";
import advice from "../Images/advice.png";
import { db } from "../FirebaseConfig";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4yk79ob",
        "template_twcdqnt",
        form.current,
        "5VqSr2F90bBmCjG8a"
      )
      .then(
        (result) => {
          console.log(result.text);

          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = async (e) => {
    const uuid = uid();
    e.preventDefault();
    setMessage("");
    if (
      name === "" ||
      lastname === "" ||
      phone === "" ||
      email === "" ||
      mess === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    } else {
      set(ref(db, "users/" + uuid), {
        name: name,
        lastname: lastname,
        phone: phone,
        email: email,
        mess: mess,
      });

      setMessage({ error: false, msg: "Contact Submit successfully" });
    }

    setName("");
    setLastname("");
    setPhone("");
    setEmail("");
    setMess("");
  };

  const handleSubmitData = (e) => {
    handleSubmit(e);
    sendEmail(e);
  };

  return (
    <>
      <div className="container-fluid color4 padding3">
        <br></br>
        <br></br>
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <h2 className="bold-text mx-2 text-white h1">Get Started Today!</h2>
        <br></br>
        <Form ref={form} onSubmit={handleSubmitData}>
          <div className="row ">
            <div className="col-md-6 mt-2">
              <Form.Group className="input-fluid" controlId="formName">
                <p className="paragraph-small">FirstName:</p>
                <InputGroup className=" mt-2">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder=""
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-6 mt-2">
              <Form.Group className="mb-3" controlId="formlast">
                <p className="paragraph-small">LastName:</p>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="lastname"
                    placeholder=""
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 mt-2">
              <Form.Group className="input-fluid" controlId="formPhone">
                <p className="paragraph-small">Phone:</p>
                <InputGroup>
                  <Form.Control
                    type="number"
                    placeholder=""
                    name="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-md-6 mt-2">
              <Form.Group className="input-fluid" controlId="formEmail">
                <p className="paragraph-small">Email:</p>
                <InputGroup>
                  <Form.Control
                    type="email"
                    placeholder=""
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12 mt-2">
              <Form.Group className="input-fluid" controlId="formMessage">
                <p className="paragraph-small">Message:</p>
                <InputGroup className=" mt-2">
                  <Form.Control
                    type="text"
                    name="mess"
                    placeholder=""
                    className="form-control"
                    value={mess}
                    onChange={(e) => setMess(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="row mx-2 mt-4 text-white">
            <p>
              <input type="checkbox" name="" value="" className="mx-2" />
              By checking this box , I understand and acknowledge that the
              information shared above is genuine to the best of my knowledge.
            </p>
            <p className="mx-2">
              This site is protected by reCAPTCHA and the Google
              <Link to="/" className="mx-1 text-primary">
                Privacy Policy{" "}
              </Link>
              and{" "}
              <Link to="/" className="mx-1 text-primary">
                Terms{" "}
              </Link>{" "}
              of Service apply.
            </p>
            <br></br>
          </div>

          <div className="mx-2">
            <Button
              variant="primary"
              type="Submit"
              className="button-effect-white3  fill4"
            >
              SUBMIT
            </Button>
          </div>
        </Form>

        <br></br>
        <br></br>
      </div>
      <div className="container-fluid padding-2">
        <div className="d-flex">
          <img src={advice} alt="error" style={{ width: "200px" }} />

          <div>
            <br></br>
            <h3 className="mt-4 h3">
              Seek expert advice from our experienced professionals. <br></br>
              Call +971 522 407 111
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
