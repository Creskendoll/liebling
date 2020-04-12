import React, { useContext, useState } from "react";
import Sprite from "./Sprite";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";
import ObjectPosition from "../../misc/ObjectPosition";
import Reward from "./Reward";

interface Props {
  isGrown: boolean;
  onClick: () => void;
  position: ObjectPosition;
}

const frames = [
  require("../../assets/plants/tree1_dry.png"),
  require("../../assets/plants/tree1_wet.png"),
  require("../../assets/plants/tree2_dry.png"),
  require("../../assets/plants/tree2_wet.png"),
  require("../../assets/plants/tree3_dry.png"),
  require("../../assets/plants/tree3_wet.png"),
];

function Tree(props: Props) {
  const windowSize = useContext(WindowContext);
  const [rewardShowing, setRewardShowing] = useState(false);

  return (
    <div>
      <Reward
        img={require("../../assets/rewards/1.png")}
        initPos={props.position}
        showing={rewardShowing}
        onClick={() => {}}
      />
      <Sprite
        frame={props.isGrown ? frames[1] : frames[0]}
        position={scalePos(props.position, windowSize)}
        tileSize={windowSize.height * 0.4}
        onClick={() => {
          setRewardShowing(true);
          props.onClick();
        }}
      />
    </div>
  );
}

export default Tree;
