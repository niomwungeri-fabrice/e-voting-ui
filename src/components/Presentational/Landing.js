import React from "react";
import "antd/dist/antd.css";
import "../../styles/landing.css";
import landing from "../../assets/img/landing_background.png";
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
      <div style={{
        display:'flex',
        justifyContent: 'space-between'
      }}>
      <h1>Tora</h1>
      <Button>Login</Button>
      </div>
      <hr/>
    </div>
  );
};

export default Landing;
