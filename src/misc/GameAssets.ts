const turtleFrames = [
  require("../assets/turtle/1l.png"),
  require("../assets/turtle/2l.png"),
  require("../assets/turtle/3l.png"),
  require("../assets/turtle/4l.png"),
];

const rabbitFrames = {
  standing: [
    require("../assets/rabbit/stand1.png"),
    require("../assets/rabbit/stand1.png"),
    require("../assets/rabbit/stand2.png"),
    require("../assets/rabbit/stand2.png"),
    require("../assets/rabbit/stand3.png"),
    require("../assets/rabbit/stand3.png"),
    require("../assets/rabbit/stand4.png"),
    require("../assets/rabbit/stand4.png"),
    require("../assets/rabbit/stand4.png"),
  ],
  moving: [
    require("../assets/rabbit/run1.png"),
    require("../assets/rabbit/run1.png"),
    require("../assets/rabbit/run2.png"),
    require("../assets/rabbit/run3.png"),
    require("../assets/rabbit/run4.png"),
    require("../assets/rabbit/run5.png"),
    require("../assets/rabbit/run5.png"),
    require("../assets/rabbit/run6.png"),
  ],
};

const cloudFrames = [
  require("../assets/cloud/1.png"),
  require("../assets/cloud/2.png"),
  require("../assets/cloud/3.png"),
  require("../assets/cloud/4.png"),
];

const butterflyFrames = {
  1: [
    require("../assets/butterfly/01/1.png"),
    require("../assets/butterfly/01/2.png"),
    require("../assets/butterfly/01/3.png"),
    require("../assets/butterfly/01/4.png"),
    require("../assets/butterfly/01/5.png"),
    require("../assets/butterfly/01/6.png"),
    require("../assets/butterfly/01/7.png"),
    require("../assets/butterfly/01/8.png"),
    require("../assets/butterfly/01/9.png"),
    require("../assets/butterfly/01/10.png"),
  ],
  2: [
    require("../assets/butterfly/05/0.png"),
    require("../assets/butterfly/05/1.png"),
    require("../assets/butterfly/05/2.png"),
    require("../assets/butterfly/05/3.png"),
    require("../assets/butterfly/05/4.png"),
    require("../assets/butterfly/05/5.png"),
    require("../assets/butterfly/05/6.png"),
    require("../assets/butterfly/05/7.png"),
    require("../assets/butterfly/05/8.png"),
    require("../assets/butterfly/05/9.png"),
  ],
};

const treeFrames = [
  require("../assets/plants/tree1_dry.png"),
  require("../assets/plants/tree1_wet.png"),
  require("../assets/plants/tree2_dry.png"),
  require("../assets/plants/tree2_wet.png"),
  require("../assets/plants/tree3_dry.png"),
  require("../assets/plants/tree3_wet.png"),
];

const rewards = [
  require("../assets/rewards/1c.jpg"),
  require("../assets/rewards/2c.jpg"),
  require("../assets/rewards/3c.jpg"),
];

const backgrounds = [
  require("../assets/bg4.jpg"),
  require("../assets/bg4_fg.png"),
];

const particles = [
  require("../assets/particles/heart.png"),
  require("../assets/particles/flower.png"),
  require("../assets/particles/but.png"),
];

const loadAssets = (then: () => void) =>
  Promise.all([
    ...turtleFrames,
    ...rabbitFrames.standing,
    ...rabbitFrames.moving,
    ...cloudFrames,
    ...butterflyFrames["1"],
    ...butterflyFrames["2"],
    ...treeFrames,
    ...rewards,
    ...backgrounds,
    ...particles,
  ]).then(then);

export {
  loadAssets,
  turtleFrames,
  rabbitFrames,
  cloudFrames,
  butterflyFrames,
  treeFrames,
  rewards,
  backgrounds,
  particles,
};
