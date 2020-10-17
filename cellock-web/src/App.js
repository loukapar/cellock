import React from "react";
import Navigator from "./navigation/navigator";
import "./App.css";
import navigationPages from "./navigation/navigations";

function App() {
  return (
    <Navigator
      routes={[
        {
          ...navigationPages.landingPage(),
          exact: true,
        },
      ]}
    />
  );
}

export default App;
