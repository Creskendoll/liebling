import ObjectPosition from "./ObjectPosition";

const pickRandom = (items: any[]) =>
  items[Math.floor(Math.random() * items.length)];

const scalePos = (
  pos: ObjectPosition,
  windowSize: { width: number; height: number }
): ObjectPosition => {
  return {
    X: pos.X * windowSize.width,
    Y: pos.Y * windowSize.height,
  };
};

export { pickRandom, scalePos };
