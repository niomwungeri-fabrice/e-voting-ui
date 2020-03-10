import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import 'rc-footer/assets/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Footer from 'rc-footer';
export const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
        <Footer theme="light" bottom="@copyright All rights reserved to x company ltd. Tora 2020" />
      </Fragment>
    </BrowserRouter>
  );
};
