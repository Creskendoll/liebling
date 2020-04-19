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
    const imgStyle = { margin: margin, display: "block" };
    if (direction === "column") {
      imgStyle["position"] = "absolute";
      imgStyle["left"] = left;
      imgStyle["top"] = top;
    }
    return (
      <img
        alt="gallery item"
        className="photo"
        key={key}
        style={imgStyle}
        {...photo}
        // onClick={onClick ? handleClick : null}
      />
    );
  };

  return (
    <div
      style={{
        overflowY: "auto",
        height: "90vh",
        marginLeft: "6vw",
        marginRight: "5vw",
        marginTop: "5vh",
        marginBottom: "5vh",
      }}
    >
      <Gallery
        columns={3}
        renderImage={_renderImage as any}
        margin={15}
        photos={photos}
      />
    </div>
  );
}

export default Collection;
