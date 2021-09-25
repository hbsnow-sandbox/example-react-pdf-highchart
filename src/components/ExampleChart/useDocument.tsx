import { useMemo } from "react";

import pdf from "@react-pdf/renderer";

const { Document, Page, View, Image } = pdf;

export const useDocument = (img: string | undefined): JSX.Element => {
  const document = useMemo(() => {
    if (!img) {
      return <></>;
    }

    return (
      <Document>
        <Page size="A4">
          <View>
            <Image src={img} style={{ width: "100%", height: "auto" }} />
          </View>
        </Page>
      </Document>
    );
  }, [img]);

  return document;
};
