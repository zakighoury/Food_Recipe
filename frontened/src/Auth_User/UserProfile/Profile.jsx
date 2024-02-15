import React, { useState, useEffect } from "react";
import axios from "axios";
import { Menu, Dropdown, Avatar, Spin } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import profilePic from "../img_Sign/Google.png";
import './Profile.scss'; // Import a separate CSS file for styling

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (!userid || !token) {
          throw new Error("User ID or token not found in local storage");
        }

        const response = await axios.get(
          `http://localhost:5000/profile/${userid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setProfile(response.data);
        } else {
          throw new Error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userid, token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    window.location.href = "/login_page";
  };

  const menu = (
    <Menu className="modern-dropdown-menu">
      {profile && (
        <Menu.Item key="username" className="modern-dropdown-item">
          <UserOutlined /> &nbsp; {profile.username}
        </Menu.Item>
      )}
      <Menu.Item key="logout" onClick={handleLogout} className="modern-dropdown-item">
        <LogoutOutlined /> &nbsp; Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : profile ? (
        <Dropdown overlay={menu} trigger={["click"]} className="modern-dropdown">
          <div>
            <Avatar src={profilePic} />
          </div>
        </Dropdown>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
