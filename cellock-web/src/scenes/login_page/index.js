import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import LoginForm from "./components/login_form";
import styles from "./styles.module.css";
import navigationPages from "../../navigation/navigations";

const LoginPage = () => {
  const history = useHistory();
  const loggedIn = useSelector((state) => state.authenticationReducer.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      history.push(navigationPages.usersPage().path);
    }
  }, [history, loggedIn]);

  return (
    <Container className={styles.page_container}>
      <Card className={styles.card}>
        <h2>Login</h2>
        <Card.Body>
          <LoginForm />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default withRouter(LoginPage);
