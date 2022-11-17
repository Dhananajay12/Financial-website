import React from "react";
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

const ModalContact2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen} className="button-effect-white  fill2">
        CONTACT US
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody style={{ padding: "0px" }}>
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
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalContact2;
