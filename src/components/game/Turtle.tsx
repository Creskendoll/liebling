import React, { useEffect, useState, useContext } from "react";
import Sprite from "./Sprite";
import ObjectPosition from "../../misc/ObjectPosition";
import WindowContext from "../../misc/WindowContext";
import { pickRandom, scalePos } from "../../misc/Util";
import Reward from "./Reward";
import { turtleFrames, rewards } from "../../misc/GameAssets";

interface Props {
  flipped: boolean;
  initPos: ObjectPosition;
  onClick: () => void;
}

interface TurtleState {
  pos: ObjectPosition;
  heading: "left" | "right";
}

let frame = 0;
setInterval(() => {
  frame = (frame + 1) % turtleFrames.length;
}, 200);

function Turtle(props: Props) {
  const windowSize = useContext(WindowContext);
  const [rewardShowing, setRewardShowing] = useState(false);

  const [turtle, setTurtle] = useState<TurtleState>({
    pos: props.initPos,
    heading: pickRandom(["right", "left"]),
  });

  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      const getHeading = () => {
        if (
          turtle.heading === "right" &&
          turtle.pos.X > props.initPos.X + 0.2
        ) {
          return "left";
        } else if (
          turtle.heading === "left" &&
          turtle.pos.X < props.initPos.X - 0.1
        ) {
          return "right";
        }
        return turtle.heading;
      };
      if (!props.flipped) {
        setTurtle({
          pos: {
            X:
              turtle.heading === "right"
                ? turtle.pos.X + 0.0008
                : turtle.pos.X - 0.0008,
            Y: turtle.pos.Y,
          },
          heading: getHeading(),
        });
      } else {
        setTurtle({
          pos: {
            X: turtle.pos.X,
            Y: turtle.pos.Y,
          },
          heading: turtle.heading,
        });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [turtle, props.flipped, props.initPos.X]);

  const getRotation = () => {
    if (props.flipped) return "rotateX(180deg)";

    if (turtle.heading === "right") return "rotateY(180deg)";
  };

  return (
    <div>
      <Reward
        img={rewards[1]}
        initPos={{
          X: props.initPos.X,
          Y: props.initPos.Y - 0.1,
        }}
        showing={rewardShowing}
        onClick={() => {}}
      />
      <Sprite
        frame={turtleFrames[frame]}
        position={scalePos(turtle.pos, windowSize)}
        rotation={getRotation()}
        flipY={props.flipped}
        tileSize={windowSize.height * 0.12}
        onClick={() => {
          if (props.initPos.X === turtle.pos.X) {
            setRewardShowing(true);
          }
          props.onClick();
        }}
      />
    </div>
  );
}

export default Turtle;
