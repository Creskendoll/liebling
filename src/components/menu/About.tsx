import React from "react";
import Particles from "react-particles-js";
import { getHeartsParams } from "../../misc/ParticleParams";
// import "../../style/about.css";

function About() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Particles
        style={{
          position: "absolute",
          height: "100%",
          display: "flex",
          filter: "blur(2px) opacity(70%)",
          zIndex: 1,
        }}
        params={getHeartsParams()}
      />
      <div
        style={{
          borderRadius: 30,
          position: "relative",
          margin: "auto",
          width: "70%",
          backgroundColor: "rgba(245,150,200,0.6)",
          boxShadow: "10px 10px 15px",
          zIndex: 3,
          border: "outset rgba(245,150,200,0.8) 5px",
        }}
      >
        {/* <div
          style={{
            position: "absolute",
            zIndex: 2,
            width: "100%",
            height: "100%",
            filter: "blur(10px)",
            backdropFilter: "blur(5px)",
            border: "solid black 5px",
          }}
        ></div> */}

        <div style={{ zIndex: 4, padding: "5vh" }}>
          <div
            style={{
              padding: "1vh",
              display: "inline-block",
              borderBottom: "dashed antiquewhite 1px",
            }}
          >
            <span
              style={{
                fontSize: 30,
                fontFamily: "'Lobster', cursive",
                color: "antiquewhite",
              }}
            >
              Made for someone special by someone who dreams.
            </span>
          </div>

          <p
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "'Indie Flower', cursive",
              color: "aliceblue",
            }}
          >
            <br />
            I am grateful for the memories
            <br />
            Grateful for the time
            <br />
            As the pure soul you bear
            <br />
            You are my morning star
            <br />
            <br />
            <span
              style={{
                color: "antiquewhite",
              }}
            >
              Happy birthday mein schatz, I hope you get to enjoy a lovely year.
              <br />
              #Ken
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
