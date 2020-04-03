import React, { useState, useEffect } from "react";
import "./style/App.css";
import GameContainer from "./GameContainer";
import GameMode from "./misc/GameEnum";
import { IoMdArrowRoundBack } from "react-icons/io";
import WindowContext from "./misc/WindowContext";
function App() {
  const [gameMode, setGameMode] = useState(GameMode.MENU);

  const _onMenuBtnClick = (gameMode: GameMode) => {
    setGameMode(gameMode);
  };

  const _onBackClick = () => {
    setGameMode(GameMode.MENU);
  };

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const updateWindowDimensions = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };
  // Component did mount
  useEffect(() => {
    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <WindowContext.Provider value={windowSize}>
      <div className="App">
        {gameMode !== GameMode.MENU && (
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <button onClick={_onBackClick} className="back-button">
              <IoMdArrowRoundBack />
            </button>
          </div>
        )}
        <GameContainer gameMode={gameMode} onMenuBtnClick={_onMenuBtnClick} />
      </div>
    </WindowContext.Provider>
  );
}

export default App;
