import React from "react";
import Gallery from "react-photo-gallery";
import "../../style/collection.css";

const photos = [
  {
    src: require("../../assets/rewards/1c.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../../assets/rewards/2c.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../../assets/rewards/3c.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../../assets/rewards/3c.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../../assets/rewards/3c.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../../assets/rewards/3c.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../../assets/rewards/3c.jpg"),
    width: 1,
    height: 1,
  },
];

function Collection() {
  const _renderImage = ({
    index,
    onClick,
    photo,
    margin,
    direction,
    top,
    left,
    key,
  }) => {
    return (
      <img
        alt="gallery item"
        className="photo"
        key={key}
        style={{ margin: margin, display: "block" }}
        {...photo}
        // onClick={onClick ? handleClick : null}
      />
    );
  };

  return (
    <div
      style={{
        height: "100%",
        marginLeft: "8vw",
        marginRight: "8vw",
        marginTop: "5vh",
        marginBottom: "5vh",
        border: "solid black 2px",
      }}
    >
      <Gallery
        columns={(w) => 2}
        targetRowHeight={3}
        renderImage={_renderImage as any}
        margin={15}
        photos={photos}
      />
    </div>
  );
}

export default Collection;
