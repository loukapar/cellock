import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import navigationPages from "../../../navigation/navigations";
import { logoutExecution } from "../../../redux/reducers/authentication/action";
import styles from "./styles.module.css";

const NavBar = ({ tabs, brand, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href={brand.path}>{brand.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {tabs.map((tab, index) => (
            <Nav.Link key={index} href={tab.path}>
              {tab.name}
            </Nav.Link>
          ))}
        </Nav>
        <Nav>
          <Nav.Link
            style={{ display: "flex", flexDirection: "row" }}
            onClick={() => {
              dispatch(logoutExecution());
              history.push(navigationPages.loginPage().path);
            }}
          >
            <span className={styles.name}>{user.CellockName}</span>
            <span className={styles.logout}>Logout</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
