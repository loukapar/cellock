import React from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container>
      <p>Landing page</p>
    </Container>
  );
};

export default withRouter(LandingPage);
