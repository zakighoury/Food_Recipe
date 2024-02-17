import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfilePage.scss"; // Import the SCSS file

function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newImage, setNewImage] = useState(null);
  const [editing, setEditing] = useState(false); // State for enabling editing mode
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const userId = localStorage.getItem("userid");
      const response = await axios.get(
        `http://localhost:5000/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfileData(response.data);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile data:", error);
      setLoading(false);
    }
  };

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    // Reset the form fields to the original values
    setUsername(profileData.username);
    setEmail(profileData.email);
  };

  const handleSaveProfile = async () => {
    try {
      const userId = localStorage.getItem("userid");
      const response = await axios.put(
        `http://localhost:5000/profile/${userId}`,
        {
          username,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfileData(response.data);
      setEditing(false);

      // Fetch the updated profile data after saving
      fetchProfileData(); // Call the fetchProfileData function again
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageUpload = async () => {
    if (!newImage) return;

    try {
      const formData = new FormData();
      formData.append("image", newImage);

      const response = await axios.post(
        "http://localhost:5000/upload-image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update the user's image URL in the profile data
      setProfileData((prevData) => ({
        ...prevData,
        imageUrl: response.data.imageUrl,
      }));

      // Clear the new image state after upload
      setNewImage(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div>
        {profileData && (
          <>
            <img
              src={profileData.imageUrl}
              alt="Profile"
              className="profile-image"
            />
            {editing ? (
              <>
                <input
                  type="file"
                  onChange={(e) => setNewImage(e.target.files[0])}
                />
                <button className="upload-button" onClick={handleImageUpload}>
                  Upload Image
                </button>
                <div className="profile-details">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="profile-buttons">
                  <button onClick={handleSaveProfile}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <div className="profile-details">
                <p>Username: {profileData.username}</p>
                <p>Email: {profileData.email}</p>
                <button onClick={handleEditProfile}>Edit Profile</button>
              </div>
            )}
          </>
        )}
        {!profileData && (
          <div className="loading-message">Loading profile...</div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
