import React, { useState } from "react";
import "../style/scene.css";
import Turtle from "../components/game/Turtle";

function Scene() {
  const [turtleFlipped, setTurtleFlipped] = useState(true);

  return (
    <div className="scene">
      <div className="bg-container">
        <Turtle
          onClick={() => setTurtleFlipped(false)}
          flipped={turtleFlipped}
        />

        <img
          className="bg-img"
          alt="Scene"
          src={require("../assets/bg1.jpg")}
        ></img>
      </div>
    </div>
  );
}

export default Scene;
