import React, { useEffect, useState, useContext } from "react";
import Sprite from "./Sprite";
import ObjectPosition from "../../misc/ObjectPosition";
import WindowContext from "../../misc/WindowContext";

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
function Turtle(props: Props) {
  const windowSize = useContext(WindowContext);

  const [turtle, setTurtle] = useState<TurtleState>({
    pos: { X: 0.3, Y: 0.82 },
    heading: "right",
  });

  const frames = {
    left: [
      require("../../assets/turtle/1l.png"),
      require("../../assets/turtle/2l.png"),
      require("../../assets/turtle/3l.png"),
      require("../../assets/turtle/4l.png"),
    ],
    right: [
      require("../../assets/turtle/1r.png"),
      require("../../assets/turtle/2r.png"),
      require("../../assets/turtle/3r.png"),
      require("../../assets/turtle/4r.png"),
    ],
  };

  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      const getHeading = () => {
        if (turtle.heading === "right" && turtle.pos.X > 0.5) {
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
          heading: "left",
        });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [turtle, frames, props.flipped]);

  const scalePos = (pos: ObjectPosition): ObjectPosition => {
    return {
      X: pos.X * windowSize.width,
      Y: pos.Y * windowSize.height,
    };
  };

  return (
    <Sprite
      frame={frames[turtle.heading][frame]}
      position={scalePos(turtle.pos)}
      flipY={props.flipped}
      onClick={props.onClick}
    />
  );
}

export default Turtle;
