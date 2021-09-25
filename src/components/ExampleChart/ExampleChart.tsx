import { useState } from "react";

import pdf from "@react-pdf/renderer";

import { Chart } from "../Chart";
import { chartOptions } from "./chartOptions";
import { useDocument } from "./useDocument";

const { PDFViewer } = pdf;

export const ExampleChart = (): JSX.Element => {
  const [img, setImg] = useState<string>();

  const document = useDocument(img);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        {document}
      </PDFViewer>
      <Chart setImg={setImg} options={chartOptions} />
    </div>
  );
};
