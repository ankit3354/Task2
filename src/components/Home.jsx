import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Profile from "./Profile";
import "./Home.css";

function Home() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div className="Loading">Loading....</div>;
  }
  return (
    <div className="home-container">
      {isAuthenticated && user ? (
        <Profile />
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default Home;
