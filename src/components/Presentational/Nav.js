import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";
export const Nav = () => {
  return (
    <div>
      <div className="landing-header-container">
        <div className="tora-title">Tora</div>
        <div
          style={{
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{
              color: "white",
            }}
            to="/sign-in"
          >
            Nominate
          </Link>
          <Link
            style={{
              color: "white",
              marginLeft: 20,
              fontFamily: "Apple Braille",
              fontWeight: 'bold'
            }}
            to="/sign-in"
          >
            Vote
          </Link>
          <Link
            style={{
              marginTop: 6,
              marginRight: 20,
              marginLeft: 20,
              color: "black",
            }}
            className="ant-btn ant-btn-default"
            to="/sign-in"
          >
            Login
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};
