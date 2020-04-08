import React, { useState, useContext, useEffect } from "react";
import ObjectPosition from "../../misc/ObjectPosition";
import Sprite from "./Sprite";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";

interface Props {
  initPos: ObjectPosition;
  onClick: () => void;
  type: number;
  speed: number;
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
    <Sprite
      frame={frames[props.type]}
      position={scalePos(state.position, windowSize)}
      tileSize={200}
      onClick={props.onClick}
    />
  );
}

export default Cloud;
