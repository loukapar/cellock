import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { loginExecution } from "../../../../redux/reducers/authentication/action";

export default function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    username: null,
    password: null,
  });

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      return;
    }
    dispatch(loginExecution(loginInfo.username, loginInfo.password));
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className={styles.form_container}
    >
      <Form.Group controlId="loginUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          required
          onChange={(event) => {
            setLoginInfo({ ...loginInfo, username: event.target.value });
          }}
        />
        <Form.Control.Feedback type="invalid">
          Username is a required field
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="loginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          onChange={(event) => {
            setLoginInfo({ ...loginInfo, password: event.target.value });
          }}
        />
        <Form.Control.Feedback type="invalid">
          Password is a required field
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" className={styles.loginButton}>
        Login
      </Button>
    </Form>
  );
}
