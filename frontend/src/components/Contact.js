import React, { useState } from "react";
import "./contact.css";
import advice from "../Images/advice.png";
import { db } from "../FirebaseConfig";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { Form, Alert, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import UserData from "../services/User";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [lastname, setLastName] = useState("");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [error, setError] = useState({ error: false, msg: "" });

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
      const newUser = {
        name,
        lastname,
        phone,
        email,
        mess,
      };
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
    // e.preventDefualt();
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
        <Form onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-md-6 mt-2">
              <Form.Group className="input-fluid" controlId="formName">
                <p className="paragraph-small">FirstName:</p>
                <InputGroup className=" mt-2">
                  <Form.Control
                    type="text"
                    placeholder="Book Title"
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
                  {/* <InputGroup.Text id="formAuthor">A</InputGroup.Text> */}
                  <Form.Control
                    type="text"
                    placeholder="Book Author"
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

        {/* <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="input-fluid mt-2">
                <p className="paragraph-small">FullName:</p>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="input-fluid mt-2">
                <p className="paragraph-small">LastName:</p>
                <input
                  id="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="input-fluid mt-2">
                <p className="paragraph-small">Phone:</p>

                <input
                  id="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="input-fluid mt-2">
                <p className="paragraph-small">Email:</p>

                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-fluid mt-2">
              <p className="paragraph-small">Message:</p>
              <input
                id="message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control"
              />
            </div>
            <button
              className="button-effect-white3  fill4 mx-2 mt-3"
              style={{ width: "15rem" }}
              type="submit"
            >
              CONTACT NOW
            </button>
          </div>
          <br></br>
          <div className="row mx-2 text-white">
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
            <button
              className="button-effect-white3  fill4 mx-2 mt-3"
              style={{ width: "15rem" }}
              type="submit"
            >
              CONTACT NOW
            </button>
          </div>
        </form> */}
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
