import React, { useState } from "react";
import "./modal.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import boy from "../Images/popup-boy.jpg";

const ModalContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  return (
    <div>
      <Button onClick={onOpen} className="text-dark">
        <div className="card-small card color">
          {" "}
          <p className="mx-2">GET EXPERTS ADVICE NOW</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>

        <br></br>
        <br></br>
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <img src={boy} className="error" alt="error" />
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="input-fluid mt-2">
                  <p className="paragraph-small">LastName:</p>
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="input-fluid mt-2">
                  <p className="paragraph-small">LastName:</p>
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="input-fluid mt-2">
                  <p className="paragraph-small">LastName:</p>
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                  />
                </div>

                <div className="input-fluid mt-2">
                  <p className="paragraph-small">LastName:</p>
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                  />
                </div>
                <div className="input-fluid mt-2">
                  <p className="paragraph-small">LastName:</p>
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                  />
                </div>

                <ModalFooter className="mt-5">
                  <Button
                    onClick={onClose}
                    className="button-effect-white  fill2"
                  >
                    Close
                  </Button>
                </ModalFooter>
              </div>
            </div>
          </ModalBody>
          <br></br>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalContact;
