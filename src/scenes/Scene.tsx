import React, { useState } from "react";
import "../style/scene.css";
import Turtle from "../components/game/Turtle";
import Butterfly from "../components/game/Butterfly";
import Tree from "../components/game/Tree";
import Cloud from "../components/game/Cloud";

function Scene() {
  const [turtleFlipped, setTurtleFlipped] = useState(true);
  const [butMoving, setButMoving] = useState(false);
  const [treeGrown, setTreeGrown] = useState(false);

  return (
    <div className="scene">
      <img
        className="bg-img"
        alt="Scene"
        src={require("../assets/bg4.jpg")}
      ></img>
      <Cloud
        speed={Math.random() * 0.001 + 0.0005}
        type={0}
        initPos={{ X: Math.random() * 0.05, Y: Math.random() * 0.1 }}
        onClick={() => {}}
      />
      <Cloud
        speed={Math.random() * 0.001 + 0.0005}
        type={1}
        initPos={{ X: Math.random() * 0.05, Y: Math.random() * 0.1 }}
        onClick={() => {}}
      />
      <Cloud
        speed={Math.random() * 0.001 + 0.0005}
        type={2}
        initPos={{ X: Math.random() * 0.05, Y: Math.random() * 0.1 }}
        onClick={() => {}}
      />
      <img
        className="bg-img"
        alt="Scene"
        src={require("../assets/bg4_fg.png")}
      ></img>
      <Turtle
        initPos={{ X: 0.25, Y: 0.82 }}
        onClick={() => setTurtleFlipped(false)}
        flipped={turtleFlipped}
      />
      <Tree
        position={{ X: 0.3, Y: 0.45 }}
        isGrown={treeGrown}
        onClick={() => setTreeGrown(!treeGrown)}
      />
      <Butterfly
        initPos={{ X: 0.2, Y: 0.36 }}
        onClick={() => setButMoving(true)}
        moving={butMoving}
      />
    </div>
  );
}

export default Scene;
