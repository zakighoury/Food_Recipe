import React from "react";
import "./Signup_components.scss";
import Signup from "./Signup.jpg";
import Google from "./Google.png";
import Facebook from "./facebook.png";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

const LoginComponents = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <div className="login_parent">
        <div className="first_child">
          <img src={Signup} alt="Login" />
          {/* <h1>Login</h1> */}
        </div>

        <div className="second_child">
          <h3 className="login_title">Want to join our Family</h3>

          <div className="login_text">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid Email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="resetPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Reset Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Reset Password"
                />
              </Form.Item>

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>I agree to the terms & policy</Checkbox>
                </Form.Item>

                {/* <a className="login-form-forgot" href=""> */}
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Signup
                </Button>
                {/* &nbsp;
                Or <a href="">register now!</a> */}
              </Form.Item>
            </Form>
          </div>
          <a>Or you can join with</a>
          <div className="third_child">
            <a className="a_google">
              <img className="google" src={Google} alt="Login" />
              Sign in with Google
            </a>
            <a className="a_google">
              <img className="facebook" src={Facebook} alt="Login" />
              Sign in with Facebook
            </a>
          </div>
          <p>
            Already have an account?{" "}
            <a className="already" href="">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
