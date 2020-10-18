import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  createUserExecution,
  updateUserExecution,
} from "../../../../redux/reducers/user/action";
import styles from "./styles.module.css";

const UserForm = ({ user, closeModal }) => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    CellockName: user ? user.CellockName : "",
    CellockSurname: user ? user.CellockSurname : "",
    CellockAccessLevel: user ? user.CellockAccessLevel : 1,
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      return;
    }
    closeModal();
    if (user) {
      dispatch(updateUserExecution(user._id, formValues));
    } else {
      dispatch(createUserExecution(formValues));
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className={styles.user_form}
    >
      <Form.Group controlId="CellockName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          required
          value={formValues.CellockName}
          onChange={(event) =>
            setFormValues({ ...formValues, CellockName: event.target.value })
          }
        />
        <Form.Control.Feedback type="invalid">
          Name is a required field
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="CellockSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter surname"
          required
          value={formValues.CellockSurname}
          onChange={(event) =>
            setFormValues({ ...formValues, CellockSurname: event.target.value })
          }
        />
        <Form.Control.Feedback type="invalid">
          Surname is a required field
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="CellockAccessLevel">
        <Form.Label>Access Level</Form.Label>

        <Form.Control
          as="select"
          value={formValues.CellockAccessLevel}
          onChange={(event) =>
            setFormValues({
              ...formValues,
              CellockAccessLevel: parseInt(event.target.value),
            })
          }
          placeholder="Select access level"
          required
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Control>
      </Form.Group>
      <div className={styles.footer}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default UserForm;
