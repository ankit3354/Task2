import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";

function Profile() {
  const { user, isAuthenticated, logout } = useAuth0();

  console.log(user);
  return (
    <div className="profile-container">
      <div className="profile">
        <div className="logout">
          <button className="logout-btn" onClick={(e) => logout()}>
            Logout
          </button>
        </div>
        {isAuthenticated && (
          <div className="profile-wrapper">
            <p>Your Profile</p>
            <img
              src={user.picture || "https://via.placeholder.com/150"}
              alt="profile-pic"
            />
            <h1>
              Hello <span>{user.name}</span>
            </h1>
            <h2>
              Your Email <span>{user.email}</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
