import { Texture } from "pixi.js";
import * as React from "react";
import { render } from "react-dom";
import { Sprite, Stage, TilingSprite } from "react-pixi-fiber";
import bunnyImg from "./bunny.png";

function Bunny(props: { x: number; y: number }) {
  return <Sprite texture={Texture.fromImage(bunnyImg)} {...props} />;
}

render(
  <Stage
    width={800}
    height={600}
    options={{
      backgroundColor: 0x10bb99,
      forceCanvas: true
    }}
  >
    <Bunny x={200} y={200} />
    <TilingSprite
      height={100}
      texture={Texture.fromImage("./bunny.png")}
      width={300}
    />
  </Stage>,
  document.getElementById("root")
);
