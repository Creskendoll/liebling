import React from "react";

interface WindowDims {
  width: number;
  height: number;
}

const WindowContext = React.createContext<WindowDims>({ width: 0, height: 0 });
export default WindowContext;
