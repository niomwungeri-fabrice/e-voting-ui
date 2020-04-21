import React from "react";
import "antd/dist/antd.css";
import "../../styles/landing.css";
import landing from "../../assets/img/landing_background.png";
import { Nav } from "./Nav";
import { Button } from "antd";

const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${landing})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* todo: to be moved to component browser */}
      <Nav />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: "white",
            flex: 1,
          }}
          className="main-message"
        >
          <h1>Tora will help you to vote</h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div
          style={{
            flex: 1,
            alignSelf: "center",
          }}
          className="proceed"
        >
          <div>
            This time around we are voting for the employee of the month be sure
            to check in every category and not passing on anyone.
          </div>
          <Button
            style={{
              color: "black",
              backgroundColor: "yellow",
            }}
            type="primary"
            size="large"
          >
            Proceed to vote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
