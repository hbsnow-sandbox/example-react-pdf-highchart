import { Dispatch, SetStateAction, useEffect, useRef } from "react";

import HighchartsReact from "highcharts-react-official";
import { PropsWithoutRef } from "react-syntax-highlighter/node_modules/@types/react";

type Props = Readonly<
  {
    setImg: Dispatch<SetStateAction<string | undefined>>;
    scale?: number;
  } & PropsWithoutRef<HighchartsReact.Props>
>;

export const Chart = (props: Props): JSX.Element => {
  const { setImg, scale = 3 } = props;
  const { width, height } = props.options.chart;

  const chartRef = useRef<HighchartsReact.Props["ref"]>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const svg = chartRef.current.container.current.querySelector("svg");

    const image = new Image();
    const svgData = new XMLSerializer().serializeToString(svg);
    const base64 = btoa(unescape(encodeURIComponent(svgData)));
    image.src = `data:image/svg+xml;charset=utf-8;base64,${base64}`;

    const handleLoad = () => {
      context.drawImage(image, 0, 0, width * scale, height * scale);
      setImg(canvas.toDataURL());
    };

    image.addEventListener("load", handleLoad);

    return () => {
      image.removeEventListener("load", handleLoad);
    };
  }, [width, height, setImg, scale]);

  return (
    <div
      style={{
        height: 0,
        visibility: "hidden",
        overflow: "hidden",
      }}
    >
      <HighchartsReact ref={chartRef} {...props} />
      <canvas
        ref={canvasRef}
        width={width * scale}
        height={height * scale}
        style={{ display: "none" }}
      ></canvas>
    </div>
  );
};
