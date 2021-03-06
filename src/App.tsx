import React, { useState, useEffect } from "react";
import "./style/App.css";
import GameContainer from "./GameContainer";
import GameMode from "./misc/GameEnum";
import { IoMdArrowRoundBack } from "react-icons/io";
import WindowContext from "./misc/WindowContext";
import { loadAssets } from "./misc/GameAssets";

function App() {
  const [gameMode, setGameMode] = useState(GameMode.MENU);
  const [loading, setLoading] = useState(true);

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

    loadAssets(() => setLoading(false));

    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <WindowContext.Provider value={windowSize}>
      {loading ? (
        <span>Loading</span>
      ) : (
        <div>
          {gameMode !== GameMode.MENU && (
            <button onClick={_onBackClick} className="back-button">
              <IoMdArrowRoundBack style={{ height: "5vh", width: "5vh" }} />
            </button>
          )}
          <GameContainer gameMode={gameMode} onMenuBtnClick={_onMenuBtnClick} />
        </div>
      )}
    </WindowContext.Provider>
  );
}

export default App;
