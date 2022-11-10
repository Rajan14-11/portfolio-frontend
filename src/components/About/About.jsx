import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a sample quote.</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="" alt="Rajan" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Rajan Goyal
          </Typography>
          <Typography>Frontend Developer.</Typography>
          <Typography style={{ margin: "1vmax 0"}}>
            I am also learning Full Stack development.
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              letterSpacing: "5px",
              lineHeight: "50px",
              textAlign: "right",
            }}
          >
            This is description Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Excepturi quibusdam libero error neque minus
            possimus delectus voluptas, ipsam facere totam dolorem.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
