import React, { useEffect, useState, useContext } from "react";
import Sprite from "./Sprite";
import ObjectPosition from "../../misc/ObjectPosition";
import WindowContext from "../../misc/WindowContext";
import { pickRandom, scalePos } from "../../misc/Util";

interface Props {
  flipped: boolean;
  initPos: ObjectPosition;
  onClick: () => void;
}

interface TurtleState {
  pos: ObjectPosition;
  heading: "left" | "right";
}

const frames = [
  require("../../assets/turtle/1l.png"),
  require("../../assets/turtle/2l.png"),
  require("../../assets/turtle/3l.png"),
  require("../../assets/turtle/4l.png"),
];

let frame = 0;
setInterval(() => {
  frame = (frame + 1) % frames.length;
}, 200);

function Turtle(props: Props) {
  const windowSize = useContext(WindowContext);

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
          turtle.pos.X > props.initPos.X + 0.4
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
  }, [turtle, props.flipped, props.initPos.X]);

  const getRotation = () => {
    if (props.flipped) return "rotateX(180deg)";

    if (turtle.heading === "right") return "rotateY(180deg)";
  };

  return (
    <Sprite
      frame={frames[frame]}
      position={scalePos(turtle.pos, windowSize)}
      rotation={getRotation()}
      flipY={props.flipped}
      tileSize={130}
      onClick={props.onClick}
    />
  );
}

export default Turtle;
