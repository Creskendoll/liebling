import React, { useState, useEffect, useContext } from "react";
import ObjectPosition from "../../misc/ObjectPosition";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";
import Sprite from "./Sprite";
import "../../style/scene.css";
import Particles from "react-particles-js";
import { getHeartsParams } from "../../misc/ParticleParams";
import useRewardStorage from "../../misc/StorageService";

interface Props {
  img: string;
  initPos: ObjectPosition;
  showing: boolean;
  onClick: () => void;
}

interface ImageState {
  position: ObjectPosition;
}

const padding = 0.05;
const size = 0.2;
function Image(props: Props) {
  const windowSize = useContext(WindowContext);
  const [animParams] = useState(getHeartsParams());

  const [_, setStoredRewards] = useRewardStorage();

  const [state, setState] = useState<ImageState>({
    position: props.initPos,
  });
  const [collected, setCollected] = useState(false);

  const addReward = () => {
    const currentRewards = JSON.parse(localStorage.getItem("@rewards") || "[]");
    if (!currentRewards.includes(props.img)) {
      setStoredRewards(currentRewards.concat(props.img));
    }
  };

  // Component did mount
  useEffect(() => {
    const anim = setInterval(() => {
      if (props.showing && state.position.Y < 1 - padding - size) {
        setState({
          position: {
            X: state.position.X,
            Y: state.position.Y + 0.004,
          },
        });
      } else if (!props.showing) {
        setState({
          position: props.initPos,
        });
      }
    }, 15);
    return () => {
      clearInterval(anim);
    };
  }, [state, props.showing, props.initPos]);

  return (
    <div className="reward">
      {props.showing && !collected && (
        <Sprite
          frame={props.img}
          position={scalePos(state.position, windowSize)}
          tileSize={windowSize.height * size}
          onClick={() => {
            setCollected(true);
            addReward();

            props.onClick();
          }}
          imgPadding={windowSize.height * padding}
          zIndex={999}
        >
          <Particles style={{ position: "absolute" }} params={animParams} />
        </Sprite>
      )}
    </div>
  );
}

export default Image;
