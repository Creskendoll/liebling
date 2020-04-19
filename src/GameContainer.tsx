import React from "react";
import "./style/game-container.css";
import Menu from "./components/menu/Menu";
import GameMode from "./misc/GameEnum";
import Scene from "./scenes/Scene";
import Collection from "./components/menu/Collection";
import About from "./components/menu/About";

interface Props {
  gameMode: GameMode;
  onMenuBtnClick: (gameMode: GameMode) => void;
}

const GameContainer = (props: Props) => {
  const getGame = () => {
    switch (props.gameMode) {
      case GameMode.MENU:
        return <Menu onClick={props.onMenuBtnClick} />;
      case GameMode.GAME:
        return <Scene />;
      case GameMode.COLLECTION:
        return <Collection />;
      case GameMode.ABOUT:
        return <About />;
      default:
        return <Menu onClick={props.onMenuBtnClick} />;
    }
  };

  // Render the current game
  return <div className="game-container">{getGame()}</div>;
};

export default GameContainer;
