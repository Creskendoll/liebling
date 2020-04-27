import React from "react";
import "../../style/collection.css";
import useRewardStorage from "../../misc/StorageService";
import Particles from "react-particles-js";
import { getHeartsParams } from "../../misc/ParticleParams";
// import { pickRandom } from "../../misc/Util";
import { rewards } from "../../misc/GameAssets";

function Collection() {
  const [storedRewards, setStoredRewards] = useRewardStorage();

  const _onImgClick = (
    source: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const win = window.open(source.currentTarget.src, "_blank");
    if (win) {
      win.focus();
    }
  };

  return (
    <div className="gallery-container">
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          height: "100%",
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflowY: "hidden",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          // border: "solid 10px",
        }}
      >
        <div className="row">
          <div className="column" style={{ paddingBottom: "10vh" }}>
            {storedRewards.includes(rewards[0]) ? (
              <img
                onClick={(e) => _onImgClick(e)}
                className="photo"
                src={rewards[0]}
                alt="collection item"
              />
            ) : (
              <img
                className="none-img"
                src={require("../../assets/rewards/none.png")}
                alt="collection item"
              />
            )}
            {storedRewards.includes(rewards[1]) ? (
              <img
                onClick={(e) => _onImgClick(e)}
                className="photo"
                src={rewards[1]}
                alt="collection item"
              />
            ) : (
              <img
                className="none-img"
                src={require("../../assets/rewards/none.png")}
                alt="collection item"
              />
            )}
            {storedRewards.includes(rewards[2]) ? (
              <img
                onClick={(e) => _onImgClick(e)}
                className="photo"
                src={rewards[2]}
                alt="collection item"
              />
            ) : (
              <img
                className="none-img"
                src={require("../../assets/rewards/none.png")}
                alt="collection item"
              />
            )}
          </div>

          <div className="column" style={{ paddingBottom: "10vh" }}>
            {storedRewards.includes(rewards[3]) ? (
              <img
                onClick={(e) => _onImgClick(e)}
                className="photo"
                src={rewards[3]}
                alt="collection item"
              />
            ) : (
              <img
                className="none-img"
                src={require("../../assets/rewards/none.png")}
                alt="collection item"
              />
            )}
            {storedRewards.includes(rewards[4]) ? (
              <img
                onClick={(e) => _onImgClick(e)}
                className="photo"
                src={rewards[4]}
                alt="collection item"
              />
            ) : (
              <img
                className="none-img"
                src={require("../../assets/rewards/none.png")}
                alt="collection item"
              />
            )}
            {storedRewards.includes(rewards[2]) ? (
              <img
                onClick={(e) => _onImgClick(e)}
                className="photo"
                src={rewards[2]}
                alt="collection item"
              />
            ) : (
              <img
                className="none-img"
                src={require("../../assets/rewards/none.png")}
                alt="collection item"
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setStoredRewards([])}
        style={{
          position: "absolute",
          right: "6%",
          bottom: "8%",
          borderRadius: 20,
          border: 0,
          padding: 10,
          fontFamily: "",
          fontSize: 30,
          zIndex: 99999,
          backgroundColor: "rgba(240, 10, 10, 0.6)",
          cursor: "pointer",
        }}
      >
        <img
          style={{
            height: 30,
            width: 30,
          }}
          src={require("../../assets/clear.png")}
          alt="collection item"
        />
      </button>
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
}

export default Collection;
