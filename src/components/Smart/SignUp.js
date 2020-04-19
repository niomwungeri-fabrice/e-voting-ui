import React, { Component } from "react";
import { UserOutlined, LockOutlined, LoginOutlined, GoogleOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { Link } from "react-router-dom";
import "../../styles/shared.css";
import "../../styles/signup.css";
export default class SignUp extends Component {
  render() {
    return (
      <div className="centered">
        <Form className="signup-form">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h1>TORA</h1>
            <h2>Administration</h2>
          </div>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            className="login-input"
            size="large"
            placeholder="First Name"
          />
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            className="login-input"
            size="large"
            placeholder="Last Name"
          />
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
          <Button onClick={this.handleLogin} size="large" type="primary" block>
            <LoginOutlined />
            Login
          </Button>
          Or <Link to="/sign-in">sign</Link>
          <div>
            Other login methods
            
          </div>
        </Form>
      </div>
    );
  }
}
