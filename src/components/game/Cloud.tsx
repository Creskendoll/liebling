import React, { useState, useContext, useEffect } from "react";
import ObjectPosition from "../../misc/ObjectPosition";
import Sprite from "./Sprite";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";
import Reward from "./Reward";
import { cloudFrames, rewards } from "../../misc/GameAssets";

interface Props {
  initPos: ObjectPosition;
  onClick: () => void;
  type: number;
  hasReward: boolean;
}

interface CloudState {
  position: ObjectPosition;
}

function Cloud(props: Props) {
  const windowSize = useContext(WindowContext);
  const [speed] = useState(Math.random() * 0.001 + 0.0005);

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
            X: state.position.X + speed,
            Y: state.position.Y,
          },
        });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [state, speed]);

  return (
    <div>
      <Reward
        img={rewards[0]}
        initPos={state.position}
        showing={rewardShowing}
        onClick={() => {}}
      />
      <Sprite
        frame={cloudFrames[props.type]}
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
