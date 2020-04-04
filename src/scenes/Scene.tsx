import React, { useState } from "react";
import "../style/scene.css";
import Turtle from "../components/game/Turtle";
import Butterfly from "../components/game/Butterfly";

function Scene() {
  const [turtleFlipped, setTurtleFlipped] = useState(true);
  const [butMoving, setButMoving] = useState(false);

  return (
    <div className="scene">
      <div className="bg-container">
        <Turtle
          onClick={() => setTurtleFlipped(false)}
          flipped={turtleFlipped}
        />
        <Butterfly
          initPos={{ X: 0.8, Y: 0.3 }}
          onClick={() => setButMoving(true)}
          moving={butMoving}
        />
        <Butterfly
          initPos={{ X: 0.3, Y: 0.3 }}
          onClick={() => setButMoving(true)}
          moving={butMoving}
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
