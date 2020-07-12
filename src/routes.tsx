import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const Routes = () => {
  const routes = [
    {
      path: "/",
      component: <Welcome />,
    },
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/register",
      component: <Register />,
    },
  ];

  return (
    <Switch>
      {routes.map((route, index) => (
        <Route exact path={route.path} key={index}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;
