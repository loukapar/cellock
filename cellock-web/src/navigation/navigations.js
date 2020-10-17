import RootPage from "../scenes/root_page";
import LandingPage from "../scenes/landing_page";
const navigationPages = {
  rootPage: () => ({
    path: "/",
    component: RootPage,
  }),
  landingPage: () => ({
    path: `/`,
    component: LandingPage,
  }),
};

export default navigationPages;
