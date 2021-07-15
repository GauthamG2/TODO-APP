import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../redux/hooks";

const Landing = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 class="display-1 font-weight-bold text-align-top "> TODO APPLICATION</h1>
            <div className="buttons m-4">
            <Link to="/register" className="btn btn-primary btn-lg btn-block">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-primary btn-lg btn-block">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
