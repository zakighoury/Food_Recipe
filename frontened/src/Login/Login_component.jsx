import React, { useState } from "react"
import "./Signup_components.scss";
import Signup from "./Signup.jpg";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";

const Login_component = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); // State to store API response
  // Empty dependency array means it only runs once after the component mounts

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/login", values);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        const userid = response.data.userid;
        localStorage.setItem("userid", userid);
        message.success("Login successful");

        // Redirect to the home page or any other page as needed
        window.location.href = "/";
      } else {
        message.error(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error.message);
      message.error("Error during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="login_parent">
        <div className="first_child">
          <img src={Signup} alt="Signup" />
        </div>

        <div className="second_child">
          <h3 className="signup_title">Login to Your Account</h3>

          <div className="signup_text">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
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

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={loading}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
          <p>
            Don't have an account?{" "}
            <a className="already" href="/signup">
              Sign up
            </a>
          </p>
        </div>
      </div>
      {/* Display the fetched data */}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Login_component;
