import React from "react";
import { Switch, Route } from "react-router-dom";

const Navigator = ({ routes }) => {
  return (
    <main>
      <Switch>
        {routes.map((route, index) =>
          route.exact ? (
            <Route
              key={index}
              exact
              path={route.path}
              render={(props) => <route.component />}
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              render={(props) => <route.component />}
            />
          )
        )}
      </Switch>
    </main>
  );
};

export default Navigator;
