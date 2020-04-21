import { IParticlesParams } from "react-particles-js";
import { pickRandom } from "./Util";
import { particles } from "./GameAssets";

const getHeartsParams: (count?: number) => IParticlesParams = (count) => {
  return {
    retina_detect: true,
    fps_limit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 150,
          duration: 10,
          opacity: 1,
          size: 20,
        },
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0,
          },
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      line_linked: {
        enable: false,
        color: "#fff",
        distance: 150,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: "lime",
          enable: false,
        },
        width: 1,
      },
      move: {
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "bounce",
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: false,
          value_area: 800,
        },
        max: 0,
        value: count || 30,
      },
      opacity: {
        anim: {
          enable: false,
          opacity_min: 0.1,
          speed: 1,
          sync: false,
        },
        random: false,
        value: 1,
      },
      shape: {
        image: {
          src: pickRandom(particles),
          height: 10,
          width: 10,
        },
        type: "image",
      },
      size: {
        anim: {
          enable: true,
          size_min: 8,
          speed: 40,
          sync: false,
        },
        random: true,
        value: 16,
      },
    },
    polygon: {
      draw: {
        enable: false,
        stroke: {
          color: "#ffffff",
          width: 0.5,
        },
      },
      enable: false,
      inline: {
        arrangement: "one-per-point",
      },
      move: {
        radius: 10,
        type: "path",
      },
      scale: 1,
      type: "inside",
      url: "",
    },
  };
};

export { getHeartsParams };
