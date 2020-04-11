import React, { useState, useEffect, useContext } from "react";
import ObjectPosition from "../../misc/ObjectPosition";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";
import Sprite from "./Sprite";
import "../../style/scene.css";
import Particles from "react-particles-js";
import { heartsParams } from "../../misc/ParticleParams";

interface Props {
  img: string;
  initPos: ObjectPosition;
  showing: boolean;
  onClick: () => void;
}

interface ImageState {
  position: ObjectPosition;
}

function Image(props: Props) {
  const windowSize = useContext(WindowContext);

  const imgPadding = windowSize.height * 0.05;

  const [state, setState] = useState<ImageState>({
    position: props.initPos,
  });
  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      if (props.showing && state.position.Y < 0.75) {
        setState({
          position: {
            X: state.position.X,
            Y: state.position.Y + 0.004,
          },
        });
      } else if (!props.showing) {
        setState({ position: props.initPos });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [state, props.showing, props.initPos]);

  return (
    <div className="reward">
      {props.showing && (
        <Sprite
          frame={props.img}
          position={scalePos(state.position, windowSize)}
          tileSize={windowSize.height * 0.2}
          onClick={props.onClick}
          imgPadding={imgPadding}
          zIndex={999}
        >
          <Particles style={{ position: "absolute" }} params={heartsParams} />
        </Sprite>
      )}
    </div>
  );
}

export default Image;
