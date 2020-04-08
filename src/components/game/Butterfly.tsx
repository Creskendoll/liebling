import React, { useEffect, useState, useContext } from "react";
import Sprite from "./Sprite";
import ObjectPosition from "../../misc/ObjectPosition";
import WindowContext from "../../misc/WindowContext";
import { pickRandom, scalePos } from "../../misc/Util";
import Image from "./Image";

interface Props {
  moving: boolean;
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

const frames = [
  require("../../assets/butterfly/01/1.png"),
  require("../../assets/butterfly/01/2.png"),
  require("../../assets/butterfly/01/3.png"),
  require("../../assets/butterfly/01/4.png"),
  require("../../assets/butterfly/01/5.png"),
  require("../../assets/butterfly/01/6.png"),
  require("../../assets/butterfly/01/7.png"),
  require("../../assets/butterfly/01/8.png"),
  require("../../assets/butterfly/01/9.png"),
  require("../../assets/butterfly/01/10.png"),
];

function Butterfly(props: Props) {
  const windowSize = useContext(WindowContext);

  const [state, setState] = useState<ButterflyState>({
    pos: props.initPos,
    headingH: pickRandom(["right", "left"]),
    headingV: pickRandom(["up", "down"]),
  });

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
      {props.moving ? (
        <div>
          <Image
            imageIndex={0}
            initPos={props.initPos}
            falling={true}
            onClick={() => {}}
          />
          <Sprite
            frame={props.moving ? frames[frame] : frames[0]}
            position={scalePos(state.pos, windowSize)}
            rotation={state.headingH === "left" ? "rotateY(180deg)" : ""}
            tileSize={64}
            onClick={props.onClick}
          />
        </div>
      ) : (
        <Sprite
          frame={props.moving ? frames[frame] : frames[0]}
          position={scalePos(state.pos, windowSize)}
          rotation={state.headingH === "left" ? "rotateY(180deg)" : ""}
          tileSize={64}
          onClick={props.onClick}
        />
      )}
    </div>
  );
}

export default Butterfly;
