import React, { useState } from "react";
import "../style/scene.css";
import Turtle from "../components/game/Turtle";
import Butterfly from "../components/game/Butterfly";
import Tree from "../components/game/Tree";
import Cloud from "../components/game/Cloud";
import Rabbit from "../components/game/Rabbit";

const clouds = () => {
  return [1, 2, 3].map((i) => {
    return (
      <Cloud
        key={i}
        hasReward={Math.random() > 0.5}
        speed={Math.random() * 0.001 + 0.0005}
        type={i % 4}
        initPos={{ X: Math.random() * 0.1, Y: Math.random() * 0.2 }}
        onClick={() => {}}
      />
    );
  });
};

function Scene() {
  const [turtleFlipped, setTurtleFlipped] = useState(true);
  const [butMoving, setButMoving] = useState(false);
  const [treeGrown, setTreeGrown] = useState(false);
  const [rabbitMoving, setRabbitMoving] = useState(false);

  return (
    <div className="scene">
      <img
        className="bg-img"
        alt="Scene"
        src={require("../assets/bg4.jpg")}
      ></img>
      {clouds()}
      <img
        className="bg-img fg-img"
        alt="Scene"
        src={require("../assets/bg4_fg.png")}
      ></img>
      <Turtle
        initPos={{ X: 0.25, Y: 0.82 }}
        onClick={() => setTurtleFlipped(!turtleFlipped)}
        flipped={turtleFlipped}
      />
      <Rabbit
        initPos={{ X: 0.75, Y: 0.82 }}
        onClick={() => setRabbitMoving(!rabbitMoving)}
        moving={rabbitMoving}
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
