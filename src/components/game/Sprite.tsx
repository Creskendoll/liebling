import React from "react";
import Interactable from "./Interactable";
import ObjectPosition from "../../misc/ObjectPosition";

interface Props {
  frame: string;
  position: ObjectPosition;
  onClick?: () => void;
  flipX?: boolean;
  flipY?: boolean;
}
function Sprite(props: Props) {
  return (
    <Interactable
      position={props.position}
      src={props.frame}
      tileHeight={128}
      tileWidth={128}
      {...props}
    />
  );
}

export default Sprite;
