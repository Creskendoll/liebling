import React from "react";
import "../../style/menu.css";
import GameMode from "../../misc/GameEnum";
import Particles from "react-particles-js";
import { getHeartsParams } from "../../misc/ParticleParams";

interface Props {
  onClick: (gameMode: GameMode) => void;
}

const Menu = (props: Props) => {
  // TODO: Add more options
  return (
    <div className="menu-container">
      <div
        style={{
          position: "absolute",
          zIndex: 9999,
          height: "100%",
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => props.onClick(GameMode.GAME)}
          className="menu-button"
        >
          <span className="menu-button-text">Play</span>
        </button>

        <button
          onClick={() => props.onClick(GameMode.COLLECTION)}
          className="menu-button"
        >
          <span className="menu-button-text">Collection</span>
        </button>

        <button
          onClick={() => props.onClick(GameMode.ABOUT)}
          className="menu-button"
        >
          <span className="menu-button-text">About</span>
        </button>
      </div>
      <Particles
        style={{
          position: "absolute",
          height: "100%",
          display: "flex",
          filter: "blur(2px) opacity(70%)",
          zIndex: 1,
          top: 0,
          left: 0,
        }}
        params={getHeartsParams()}
      />
    </div>
  );
};

export default Menu;
