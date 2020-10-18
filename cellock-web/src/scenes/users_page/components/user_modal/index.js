import React from "react";
import { Modal } from "react-bootstrap";
import UserForm from "./user_form";

const UserModal = ({ mode, show, handleClose, user }) => {
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{user ? "Edit User" : "Create User"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserForm user={user} closeModal={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default UserModal;
