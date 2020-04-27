import React, { useState } from "react";
import "../style/scene.css";
import Turtle from "../components/game/Turtle";
import Butterfly from "../components/game/Butterfly";
import Tree from "../components/game/Tree";
import Cloud from "../components/game/Cloud";
import Rabbit from "../components/game/Rabbit";
import { backgrounds } from "../misc/GameAssets";
import { pickRandom } from "../misc/Util";

const clouds = () => {
  const clouds = [1, 2, 3];
  const hasReward = pickRandom(clouds);

  return clouds.map((i) => {
    return (
      <Cloud
        key={i}
        hasReward={i === hasReward}
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
  const [butMoving2, setBut2Moving] = useState(false);
  const [treeGrown, setTreeGrown] = useState(false);
  const [rabbitMoving, setRabbitMoving] = useState(false);

  return (
    <div className="scene">
      <img className="bg-img" alt="Scene" src={backgrounds[0]}></img>
      {clouds()}
      <img className="bg-img fg-img" alt="Scene" src={backgrounds[1]}></img>
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
        position={{ X: 0.25, Y: 0.3 }}
        isGrown={treeGrown}
        onClick={() => setTreeGrown(!treeGrown)}
      />
      <Butterfly
        type="1"
        initPos={{ X: 0.2, Y: 0.36 }}
        onClick={() => setButMoving(true)}
        moving={butMoving}
      />
      <Butterfly
        type="2"
        initPos={{ X: 0.75, Y: 0.75 }}
        onClick={() => setBut2Moving(true)}
        moving={butMoving2}
      />
    </div>
  );
}

export default Scene;
