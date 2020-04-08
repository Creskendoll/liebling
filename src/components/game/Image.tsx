import React, { useState, useEffect, useContext } from "react";
import ObjectPosition from "../../misc/ObjectPosition";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";
import Sprite from "./Sprite";

const images = [require("../../assets/rewards/1.png")];

interface Props {
  imageIndex: number;
  initPos: ObjectPosition;
  falling: boolean;
  onClick: () => void;
}

interface ImageState {
  position: ObjectPosition;
}

function Image(props: Props) {
  const windowSize = useContext(WindowContext);

  const [state, setState] = useState<ImageState>({
    position: props.initPos,
  });
  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      if (props.falling && state.position.Y < 0.8) {
        setState({
          position: {
            X: state.position.X,
            Y: state.position.Y + 0.004,
          },
        });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [state, props.falling]);

  return (
    <Sprite
      frame={images[props.imageIndex]}
      position={scalePos(state.position, windowSize)}
      tileSize={200}
      onClick={props.onClick}
    />
  );
}

export default Image;
