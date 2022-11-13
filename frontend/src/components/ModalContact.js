import React from "react";
import "./modal.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
const ModalContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <ModalHeader fontSize="30px" color="purple">
            Cost Calculate
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p className="h5">
              {" "}
              Choose your business category This question is required.{" "}
            </p>
            <p>
              * Your business category will help determine which jurisdiction,
              trade licence and business activity will apply to your company.
            </p>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="input-fluid mt-2">
                  <p className="paragraph-small">FullName:</p>
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                  />
                </div>
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
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="input-fluid mt-2">
                  <p className="paragraph-small">Phone:</p>

                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="input-fluid mt-2">
                  <p className="paragraph-small">Email:</p>

                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="input-fluid mt-2">
                <p className="paragraph-small">Message:</p>
                <input
                  type="text"
                  name="user_name"
                  id=""
                  className="form-control"
                />
              </div>
            </div>
          </ModalBody>
          <br></br>
          <ModalFooter>
            <Button onClick={onClose} className="button-effect-white  fill2">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalContact;
