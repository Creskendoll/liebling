import React, { useState, useContext, useEffect } from "react";
import ObjectPosition from "../../misc/ObjectPosition";
import Sprite from "./Sprite";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";
import Reward from "./Reward";

interface Props {
  initPos: ObjectPosition;
  onClick: () => void;
  type: number;
  speed: number;
  hasReward: boolean;
}

interface CloudState {
  position: ObjectPosition;
}

const frames = [
  require("../../assets/cloud/1.png"),
  require("../../assets/cloud/2.png"),
  require("../../assets/cloud/3.png"),
  require("../../assets/cloud/4.png"),
];

function Cloud(props: Props) {
  const windowSize = useContext(WindowContext);

  const [state, setState] = useState<CloudState>({
    position: props.initPos,
  });
  const [rewardShowing, setRewardShowing] = useState(false);

  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      if (state.position.X > 1.1) {
        setState({
          position: {
            X: -0.1,
            Y: state.position.Y,
          },
        });
      } else {
        setState({
          position: {
            X: state.position.X + props.speed,
            Y: state.position.Y,
          },
        });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [state, props.speed]);

  return (
    <div>
      <Reward
        img={require("../../assets/rewards/1.png")}
        initPos={state.position}
        showing={rewardShowing}
        onClick={() => {
          setRewardShowing(false);
        }}
      />
      <Sprite
        frame={frames[props.type]}
        position={scalePos(state.position, windowSize)}
        tileSize={windowSize.height * 0.2}
        onClick={() => {
          setRewardShowing(true);
          props.onClick();
        }}
      />
    </div>
  );
}

export default Cloud;
