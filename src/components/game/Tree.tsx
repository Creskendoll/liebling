import React, { useContext } from "react";
import Sprite from "./Sprite";
import { scalePos } from "../../misc/Util";
import WindowContext from "../../misc/WindowContext";
import ObjectPosition from "../../misc/ObjectPosition";

interface Props {
  isGrown: boolean;
  onClick: () => void;
  position: ObjectPosition;
}

const frames = [
  require("../../assets/plants/tree1_dry.png"),
  require("../../assets/plants/tree1_wet.png"),
  require("../../assets/plants/tree2_dry.png"),
  require("../../assets/plants/tree2_wet.png"),
  require("../../assets/plants/tree3_dry.png"),
  require("../../assets/plants/tree3_wet.png"),
];

function Tree(props: Props) {
  const windowSize = useContext(WindowContext);

  return (
    <Sprite
      frame={props.isGrown ? frames[1] : frames[0]}
      position={scalePos(props.position, windowSize)}
      tileSize={windowSize.height * 0.4}
      onClick={props.onClick}
    />
  );
}

export default Tree;
