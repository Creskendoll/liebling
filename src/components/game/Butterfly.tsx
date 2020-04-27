import React, { useEffect, useState, useContext } from "react";
import Sprite from "./Sprite";
import ObjectPosition from "../../misc/ObjectPosition";
import WindowContext from "../../misc/WindowContext";
import { pickRandom, scalePos } from "../../misc/Util";
import Reward from "./Reward";
import { butterflyFrames, rewards } from "../../misc/GameAssets";

interface Props {
  moving: boolean;
  type: "1" | "2";
  initPos: ObjectPosition;
  onClick: () => void;
}

interface ButterflyState {
  pos: ObjectPosition;
  headingH: "left" | "right";
  headingV: "up" | "down";
}

let frame = 0;
let loopUp = true;
setInterval(() => {
  if ((frame === 9 && loopUp) || (frame === 0 && !loopUp)) loopUp = !loopUp;
  if (loopUp) {
    frame += 1;
  } else {
    frame -= 1;
  }
}, 100);

function Butterfly(props: Props) {
  const windowSize = useContext(WindowContext);

  const [state, setState] = useState<ButterflyState>({
    pos: props.initPos,
    headingH: pickRandom(["right", "left"]),
    headingV: pickRandom(["up", "down"]),
  });
  const [rewardShowing, setRewardShowing] = useState(false);

  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      const getHeadingH = () => {
        if (state.headingH === "right" && state.pos.X > 0.9) {
          return "left";
        } else if (state.headingH === "left" && state.pos.X < 0.1) {
          return "right";
        }
        return state.headingH;
      };
      const getHeadingV = () => {
        if (state.headingV === "up" && state.pos.Y > props.initPos.Y + 0.1) {
          return "down";
        } else if (
          state.headingV === "down" &&
          state.pos.Y < props.initPos.Y - 0.1
        ) {
          return "up";
        }
        return state.headingV;
      };
      if (props.moving) {
        setState({
          pos: {
            X:
              state.headingH === "right"
                ? state.pos.X + 0.0015
                : state.pos.X - 0.0015,
            Y:
              state.headingV === "up"
                ? state.pos.Y + 0.0005
                : state.pos.Y - 0.0005,
          },
          headingH: getHeadingH(),
          headingV: getHeadingV(),
        });
      } else {
        setState({
          pos: {
            X: state.pos.X,
            Y: state.pos.Y,
          },
          headingH: state.headingH,
          headingV: state.headingV,
        });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [state, props.moving, props.initPos]);

  return (
    <div>
      <Reward
        img={props.type === "1" ? rewards[3] : rewards[4]}
        initPos={{
          X: props.initPos.X,
          Y: props.initPos.Y - 0.1,
        }}
        showing={rewardShowing}
        onClick={() => {
          setRewardShowing(false);
        }}
      />
      <Sprite
        frame={
          props.moving
            ? butterflyFrames[props.type][frame]
            : butterflyFrames[props.type][0]
        }
        position={scalePos(state.pos, windowSize)}
        rotation={state.headingH === "left" ? "rotateY(180deg)" : ""}
        tileSize={windowSize.height * 0.07}
        onClick={() => {
          if (!props.moving) {
            setRewardShowing(true);
          }
          props.onClick();
        }}
      />
    </div>
  );
}

export default Butterfly;
