import React, { useRef, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { db } from "../FirebaseConfig";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { Form, Alert, InputGroup } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ChakkraModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        },
        (error) => {
          console.log(error);
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
    <div>
      <Button onClick={onOpen} className="button-effect-white2  fill3">
        Calculate Cost
      </Button>
      <br></br>

      <Modal onClose={onClose} isOpen={isOpen} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent style={{ marginTop: "10rem" }}>
          <ModalHeader fontSize="30px" color="purple">
            Cost Calculate
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {message?.msg && (
              <Alert
                variant={message?.error ? "danger" : "success"}
                dismissible
                onClose={() => setMessage("")}
              >
                {message?.msg}
              </Alert>
            )}
            <Form ref={form} onSubmit={handleSubmitData}>
              <div className="row ">
                <div className="col-md-6 mt-2">
                  <Form.Group className="input-fluid" controlId="formName">
                    <p className="mx-2">FirstName:</p>
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
                  <Form.Group className="input-fluid" controlId="formlast">
                    <p className="mx-2">LastName:</p>
                    <InputGroup className="mt-2">
                      <Form.Control
                        type="text"
                        name="lastname"
                        placeholder=""
                        className="form-control"
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
                    <p className="mx-2">Phone:</p>
                    <InputGroup className="mt-2">
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
                    <p className="mx-2">Email:</p>
                    <InputGroup className="mt-2">
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
                    <p className="mx-2">Message:</p>
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
              <div className="row  mt-5 ">
                <p>
                  <input type="checkbox" name="" value="" className="mx-2" />
                  By checking this box , I understand and acknowledge that the
                  information shared above is genuine to the best of my
                  knowledge.
                </p>

                <br></br>
              </div>

              <div className=" just-con   mt-5">
                <Button
                  variant="primary"
                  type="Submit"
                  className="button-effect-white3  fill4"
                >
                  SUBMIT
                </Button>
                <Button
                  onClick={onClose}
                  className="button-effect-white3  fill4 mx-1"
                >
                  Close
                </Button>
              </div>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChakkraModal;
