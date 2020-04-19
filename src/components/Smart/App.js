import React, { Fragment } from "react";
import "antd/dist/antd.css";
import "rc-footer/assets/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
// import Footer from "rc-footer";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Landing from "../Presentational/Landing";
export const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
        <Route path="/" exact component={Landing} />
          <Route path="/sign-in" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/forgot-psw" exact component={ForgotPassword} />
        </Switch>
        {/* <Footer
          theme="light"
          bottom="@copyright All rights reserved to x company ltd. Tora 2020"
        /> */}
      </Fragment>
    </BrowserRouter>
  );
};
