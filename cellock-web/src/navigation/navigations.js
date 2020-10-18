import RootPage from "../scenes/root_page";
import LoginPage from "../scenes/login_page";
import UsersPage from "../scenes/users_page";

const navigationPages = {
  rootPage: () => ({
    path: "/",
    component: RootPage,
  }),
  loginPage: () => ({
    path: "/",
    component: LoginPage,
  }),
  usersPage: () => ({
    path: "/users",
    component: UsersPage,
  }),
};

export default navigationPages;
