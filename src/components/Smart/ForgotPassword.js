import React, { Component } from "react";
import { Input, Button, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import '../../styles/app.css'

export default class ForgotPassword extends Component {
  handlePassword = () => {
    alert("Please check your email");
  };
  render() {
    return (
      <div className="component-container centered">
        <Form className="login-form">
          <div className="text-centered">
            <h1>TORA</h1>
            <h2>Administration</h2>
          </div>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            className="login-input"
            size="large"
            placeholder="Email"
          />
          <Button
            onClick={this.handlePassword}
            size="large"
            type="primary"
            block
          >
            Get Reset Link
          </Button>
        </Form>
      </div>
    );
  }
}
