import React, { useEffect, useState, useContext } from "react";
import Sprite from "./Sprite";
import ObjectPosition from "../../misc/ObjectPosition";
import WindowContext from "../../misc/WindowContext";
import { pickRandom, scalePos } from "../../misc/Util";
import Reward from "./Reward";
import { rabbitFrames, rewards } from "../../misc/GameAssets";

interface Props {
  moving: boolean;
  initPos: ObjectPosition;
  onClick: () => void;
}

interface stateState {
  pos: ObjectPosition;
  heading: "left" | "right";
}

let frame = 0;
setInterval(() => {
  frame = (frame + 1) % rabbitFrames.standing.length;
}, 200);

function Rabbit(props: Props) {
  const windowSize = useContext(WindowContext);
  const [rewardShowing, setRewardShowing] = useState(false);

  const [state, setState] = useState<stateState>({
    pos: props.initPos,
    heading: pickRandom(["right", "left"]),
  });

  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      const getHeading = () => {
        if (state.heading === "right" && state.pos.X > props.initPos.X + 0.1) {
          return "left";
        } else if (
          state.heading === "left" &&
          state.pos.X < props.initPos.X - 0.1
        ) {
          return "right";
        }
        return state.heading;
      };
      if (props.moving) {
        setState({
          pos: {
            X:
              state.heading === "right"
                ? state.pos.X + 0.001
                : state.pos.X - 0.001,
            Y: state.pos.Y,
          },
          heading: getHeading(),
        });
      } else {
        setState({
          pos: {
            X: state.pos.X,
            Y: state.pos.Y,
          },
          heading: state.heading,
        });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [state, props.moving, props.initPos.X]);

  const getRotation = () => {
    if (state.heading === "right") return "rotateY(180deg)";
  };

  return (
    <div>
      <Reward
        img={rewards[2]}
        initPos={{
          X: props.initPos.X,
          Y: props.initPos.Y - 0.15,
        }}
        showing={rewardShowing}
        onClick={() => {}}
      />
      <Sprite
        frame={
          props.moving
            ? rabbitFrames.moving[frame % rabbitFrames.moving.length]
            : rabbitFrames.standing[frame]
        }
        position={scalePos(state.pos, windowSize)}
        rotation={getRotation()}
        flipY={props.moving}
        tileSize={windowSize.height * 0.15}
        onClick={() => {
          if (props.initPos.X === state.pos.X) {
            setRewardShowing(true);
          }
          props.onClick();
        }}
      />
    </div>
  );
}

export default Rabbit;
