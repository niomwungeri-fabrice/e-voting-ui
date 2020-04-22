import React from "react";
import "antd/dist/antd.css";
import "../../styles/landing.css";
import { Button } from "antd";

const Landing = () => {
  return (
    <div className="landing-background">
      <div className="landing-container">
        <div className="main-message">
          <div className="main-message-header">
            <span style={{ color: "yellow" }}>Tora</span>
            <span style={{ color: "white" }}> will help you to vote</span>
          </div>
          <div style={{ fontSize: 17 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div className="proceed">
          <div className="proceed-vote-text">
            This time around we are voting for the employee of the month be sure
            to check in every category and not passing on anyone.
          </div>
          <Button className="proceed-vote-btn" type="primary" size="large">
            Proceed to vote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
