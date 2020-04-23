import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
export const Nav = () => {
  return (
    <div>
      <div className="landing-header-container">
        <div className="tora-title">Tora</div>
        <div>
          <Link className="nominate" to="/nominate">
            Nominate
          </Link>
          <Link className="vote" to="/vote">
            Vote
          </Link>
          <Link className="ant-btn ant-btn-default sign-in" to="/sign-in">
            Login
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};
