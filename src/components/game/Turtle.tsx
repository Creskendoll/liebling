import React, { useEffect, useState, useContext } from "react";
import Sprite from "./Sprite";
import ObjectPosition from "../../misc/ObjectPosition";
import WindowContext from "../../misc/WindowContext";
import { pickRandom } from "../../misc/Util";

interface Props {
  flipped: boolean;
  onClick: () => void;
}

interface TurtleState {
  pos: ObjectPosition;
  heading: "left" | "right";
}

let frame = 0;
setInterval(() => {
  frame = (frame + 1) % 4;
}, 200);

const frames = [
  require("../../assets/turtle/1l.png"),
  require("../../assets/turtle/2l.png"),
  require("../../assets/turtle/3l.png"),
  require("../../assets/turtle/4l.png"),
];

function Turtle(props: Props) {
  const windowSize = useContext(WindowContext);

  const [turtle, setTurtle] = useState<TurtleState>({
    pos: { X: 0.35, Y: 0.82 },
    heading: pickRandom(["right", "left"]),
  });

  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      const getHeading = () => {
        if (turtle.heading === "right" && turtle.pos.X > 0.7) {
          return "left";
        } else if (turtle.heading === "left" && turtle.pos.X < 0.3) {
          return "right";
        }
        return turtle.heading;
      };
      if (!props.flipped) {
        setTurtle({
          pos: {
            X:
              turtle.heading === "right"
                ? turtle.pos.X + 0.001
                : turtle.pos.X - 0.001,
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
  }, [turtle, props.flipped]);

  const scalePos = (pos: ObjectPosition): ObjectPosition => {
    return {
      X: pos.X * windowSize.width,
      Y: pos.Y * windowSize.height,
    };
  };

  const getRotation = () => {
    if (props.flipped) return "rotateX(180deg)";

    if (turtle.heading === "right") return "rotateY(180deg)";
  };

  return (
    <Sprite
      frame={frames[frame]}
      position={scalePos(turtle.pos)}
      rotation={getRotation()}
      flipY={props.flipped}
      tileSize={150}
      onClick={props.onClick}
    />
  );
}

export default Turtle;
