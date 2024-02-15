import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import "./Signup_components.scss";
import Signup from "../img_Sign/Signup.jpg";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";

const SignupComponents = () => {
  const [loading, setLoading] = useState(false);
  const SuccessRedirect = useNavigate(); 

  const fetchdata = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/signup", values);

      if (response.status === 201) {
        console.log("Signup successful:", response.data);
        SuccessRedirect("/login_page");
      } else {
        console.error("Signup failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    fetchdata(values);
  };

  return (
    <div>
      <div className="login_parent">
        <div className="first_child">
          <img src={Signup} alt="Signup" />
        </div>

        <div className="second_child">
          <h3 className="signup_title">Want to join our Family</h3>

          <div className="signup_text">
            <Form
              name="normal_signup"
              className="signup-form"
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
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Confirm Password"
                />
              </Form.Item>

              <Form.Item>
                <Form.Item valuePropName="checked" noStyle>
                  <Checkbox>I agree to the terms & policy</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="signup-form-button"
                  loading={loading}
                >
                  Signup
                </Button>
              </Form.Item>
            </Form>
          </div>
          <p>
            Already have an account?{" "}
            <a className="already" href="/login">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupComponents;
