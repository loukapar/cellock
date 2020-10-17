import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import navigationPages from "../../navigation/navigations";

const RootPage = () => {
  return <Redirect to={navigationPages.landingPage().path} />;
};

export default withRouter(RootPage);
