import React from "react";
import ObjectPosition from "../../misc/ObjectPosition";

interface Props {
  frame: string;
  position: ObjectPosition;
  tileSize: number;
  imgPadding?: number;
  children?: JSX.Element;
  rotation?: string;
  onClick?: () => void;
  flipX?: boolean;
  flipY?: boolean;
  zIndex?: number;
}
function Sprite(props: Props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        transform: `translate(${props.position.X}px, ${props.position.Y}px)`,
        overflow: "hidden",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        zIndex: props.zIndex || 0,
      }}
    >
      {props.children}
      <div style={{ padding: props.imgPadding || 0 }}>
        <img
          src={props.frame}
          style={{
            transition: "0.3s ease-in-out",
            filter: "drop-shadow(5px 5px 5px #222)",
            transform: props.rotation,
            height: props.tileSize,
            width: props.tileSize,
            imageRendering: "pixelated",
            objectFit: "contain",
          }}
          alt="Game object"
        />
      </div>
    </div>
  );
}

export default Sprite;
