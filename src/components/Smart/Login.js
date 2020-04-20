import React, { Component } from "react";
import { Input, Button, Checkbox, Form } from "antd";
import "../../styles/login.css";
import "../../styles/shared.css";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  LoginOutlined,
  GoogleCircleFilled,
} from "@ant-design/icons";
class Login extends Component {
  handleLogin = (e) => {
    e.preventDefault();
    // todo: handle Login
    const { history } = this.props;
    history.push("/profile");
  };
  handleSocialAuth = (e) => {
    e.preventDefault();
    // todo: social login
    const { history } = this.props;
    history.push("/profile");
  };
  handleRememberMe = (e) => {
    e.preventDefault();
    alert("todo: handle remember me", e);
  };
  render() {
    return (
      <div className="centered">
        <Form className="login-form">
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
            placeholder="email"
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
          <div className="separator">
            <span className="middle-separator">or</span>
          </div>
          <Button onClick={this.handleSocialAuth} size="large" type="primary" block>
            Login with
            <GoogleCircleFilled />
          </Button>
          <div className="remember">
            <Form.Item name="remember">
              <Checkbox onClick={(e) => this.handleRememberMe(e)}>
                Remember me
              </Checkbox>
            </Form.Item>
            <Link to="/forgot-psw" className="forgotPassword">
              Forgot Password
            </Link>
          </div>
          Or <Link to="/sign-up">register now!</Link>
        </Form>
      </div>
    );
  }
}

export default Login;
