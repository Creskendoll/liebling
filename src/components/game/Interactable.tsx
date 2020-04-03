import React from "react";
import ObjectPosition from "../../misc/ObjectPosition";

interface Props {
  src: string;
  tileHeight: number;
  tileWidth: number;
  position: ObjectPosition;
  onClick?: () => void;
  flipX?: boolean;
  flipY?: boolean;
}

function Interactable(props: Props) {
  const rotation = props.flipY ? "rotateX(-180deg)" : "";
  return (
    <div
      onClick={props.onClick}
      style={{
        transform: `translate(${props.position.X}px, ${props.position.Y}px)`,
        overflow: "hidden",
        position: "absolute",
      }}
    >
      <img
        src={props.src}
        style={{
          transform: rotation,
          height: props.tileHeight,
          width: props.tileWidth,
          imageRendering: "pixelated",
        }}
        alt="Game object"
      />
    </div>
  );
}

export default Interactable;
