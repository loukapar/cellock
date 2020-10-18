import React from "react";
import Navigator from "./navigation/navigator";
import "./app.module.css";
import navigationPages from "./navigation/navigations";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navigator
        routes={[
          {
            ...navigationPages.loginPage(),
            exact: true,
          },
          {
            ...navigationPages.usersPage(),
            exact: true,
          },
        ]}
      />
    </Provider>
  );
}

export default App;
