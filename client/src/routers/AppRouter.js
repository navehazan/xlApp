import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Aux from "../components/Aux/Aux";
const AppRouter = () => (
  <BrowserRouter>
  <Aux>
    <Navbar />
    <Switch>
    <Route exact={true} path="/" component={SignUp} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/home" component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
    </Aux>
  </BrowserRouter>
);
export default AppRouter;
