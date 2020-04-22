import React, { Fragment } from "react";
import "antd/dist/antd.css";
import "rc-footer/assets/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
// import Footer from "rc-footer";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Landing from "../Presentational/Landing";
import { NotFound } from "../Presentational/NotFound";
import { Nav } from "../Presentational/Nav";
export const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        {/* todo: to be moved to component browser */}
        <Nav />
        <div>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/sign-in" exact component={Login} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/forgot-psw" exact component={ForgotPassword} />
            <Route component={NotFound} />
          </Switch>
          connect
        </div>
        {/* <Footer
          theme="light"
          bottom="@copyright All rights reserved to x company ltd. Tora 2020"
        /> */}
      </Fragment>
    </BrowserRouter>
  );
};
