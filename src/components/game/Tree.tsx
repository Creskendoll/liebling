import React, { useContext, useState } from "react";
import Sprite from "./Sprite";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";
import ObjectPosition from "../../misc/ObjectPosition";
import Reward from "./Reward";
import { treeFrames, rewards } from "../../misc/GameAssets";

interface Props {
  isGrown: boolean;
  onClick: () => void;
  position: ObjectPosition;
}

function Tree(props: Props) {
  const windowSize = useContext(WindowContext);
  const [rewardShowing, setRewardShowing] = useState(false);

  return (
    <div>
      <Reward
        img={rewards[1]}
        initPos={props.position}
        showing={rewardShowing}
        onClick={() => {}}
      />
      <Sprite
        frame={props.isGrown ? treeFrames[1] : treeFrames[0]}
        position={scalePos(props.position, windowSize)}
        tileSize={windowSize.height * 0.5}
        onClick={() => {
          setRewardShowing(true);
          props.onClick();
        }}
      />
    </div>
  );
}

export default Tree;
