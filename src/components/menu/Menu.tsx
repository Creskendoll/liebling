import React from "react";
import "../../style/menu.css";
import GameMode from "../../misc/GameEnum";

interface Props {
  onClick: (gameMode: GameMode) => void;
}

const Menu = (props: Props) => {
  // TODO: Add more options
  return (
    <div className="menu-container">
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
  );
};

export default Menu;
