import React, { Fragment, useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import DataTable from "../../components/molecules/datatable";
import NavBar from "../../components/molecules/navigation_bar";
import styles from "./styles.module.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import UserModal from "./components/user_modal";
import { useDispatch, useSelector } from "react-redux";
import navigationPages from "../../navigation/navigations";
import { tableHeaders, navBarConfiguration } from "./configuration";
import {
  deleteUserExecution,
  getUsersExecution,
} from "../../redux/reducers/user/action";

const UsersPage = () => {
  const users = useSelector((state) => state.usersReducer.userList);
  const loggedInUser = useSelector((state) => state.authenticationReducer.user);
  const updateList = useSelector((state) => state.usersReducer.updateList);

  const modalMode = useRef(null);
  const selectedUser = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const loggedIn = useSelector((state) => state.authenticationReducer.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch();

  // fetch users
  useEffect(() => {
    dispatch(getUsersExecution());
  }, [dispatch]);

  // navigate to login page in case where user is not loggedin
  useEffect(() => {
    if (!loggedIn) {
      history.push(navigationPages.loginPage().path);
    }
  }, [history, loggedIn]);

  // update user list when needed
  useEffect(() => {
    if (updateList === true) dispatch(getUsersExecution());
  }, [updateList, dispatch]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  let actions = [
    {
      component: () => <BiEdit />,
      onClick: (user) => {
        modalMode.current = "EDIT";
        selectedUser.current = user;
        handleShowModal();
      },
    },
    {
      component: () => <RiDeleteBin2Line />,
      onClick: (user) => {
        dispatch(deleteUserExecution(user._id));
      },
    },
  ];

  const onCreateNewUserClicked = () => {
    modalMode.current = "CREATE";
    selectedUser.current = null;
    handleShowModal();
  };

  return (
    <Fragment>
      <NavBar
        tabs={navBarConfiguration.tabs}
        brand={navBarConfiguration.brand}
        user={loggedInUser}
      />
      <Container className={styles.users_page_container}>
        <h2>User Management</h2>
        <Button
          className={styles.create_user_button}
          onClick={() => {
            onCreateNewUserClicked();
          }}
        >
          Add User
        </Button>
        <DataTable headers={tableHeaders} data={users} actions={actions} />
      </Container>
      <UserModal
        mode={modalMode.current}
        show={showModal}
        handleClose={handleCloseModal}
        user={selectedUser.current}
      />
    </Fragment>
  );
};

export default withRouter(UsersPage);
