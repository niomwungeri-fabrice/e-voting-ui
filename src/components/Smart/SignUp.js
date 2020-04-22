import React, { Component } from "react";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { Link } from "react-router-dom";
import "../../styles/shared.css";
import "../../styles/signup.css";
import "../../styles/app.css";
export default class SignUp extends Component {
  handleCreateAccount = (e) => {
    e.preventDefault();
    // todo: social login
    const { history } = this.props;
    history.push("/sign-in");
  };
  render() {
    return (
      <div className="component-container centered">
        <Form className="signup-form">
          <div className="text-centered">
            <h1>TORA</h1>
            <h2>Administration</h2>
          </div>
          <div className="add-flex-view">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              className="login-input first-name-input"
              size="large"
              placeholder="First Name"
            />
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              className="login-input last-name-input"
              size="large"
              placeholder="Last Name"
            />
          </div>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            className="login-input"
            size="large"
            placeholder="Email"
          />
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            className="login-input"
            size="large"
            placeholder="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          />
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            className="login-input"
            size="large"
            placeholder="Confirm Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          />
          <Button
            onClick={this.handleCreateAccount}
            size="large"
            type="primary"
            block
          >
            <LoginOutlined />
            Create account
          </Button>
          <div className="sign-in-zone">
            Or
            <Link className="sign-in-link" to="/sign-in">
              Sign In
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}
