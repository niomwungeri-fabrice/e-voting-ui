import React, { Component } from 'react';
import { Row, Col, Input, Button, Checkbox, Form } from 'antd';
import '../../styles/login.css';
import { Link } from 'react-router-dom';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
class Login extends Component {
  handleLogin = e => {
    e.preventDefault();
    // todo: handle Login
    alert('todo: handle Login', e);
  };
  render() {
    return (
      <Row>
        <Col span={6} />
        <Col span={12}>
          
          <Form className="login-form">
          <div
            style={{
              textAlign: 'center'
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
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            />
            <Button
              onClick={this.handleLogin}
              size="large"
              type="primary"
              block
            >
              <LoginOutlined />
              Login
            </Button>
            <div className="remember">
              <Form.Item name="remember">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link className="forgotPassword" to="/">
                Forgot Password
              </Link>
            </div>
            Or <Link to="/">register now!</Link>
          </Form>
        </Col>
        <Col span={6} />
      </Row>
    );
  }
}

export default Login;
