import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Svg,
  Defs,
  Stop,
  Circle,
  LinearGradient,
  Rect,
} from "@react-pdf/renderer";

import { textStyles } from "../../../common/styleSheets/text";
import { mainStyles } from "../../../common/styleSheets/main";
import { AvailibityHeader } from "./AvailibityHeader/AvailibityHeader";
import { AvailibityBody } from "./AvailibityBody/AvailibityBody";
import { AvailibityFooter } from "./AvailibityFooter/AvailibityFooter";

const styles = StyleSheet.create({});

export const AvailibityDocument = ({
  aviability,
  addressor,
  addresse,
  date,
  staffmembers,
}) => (
  <Document>
    <Page size="A4" style={mainStyles.page}>
      <AvailibityHeader />
      <AvailibityBody
        addressor={addressor}
        addresse={addresse}
        date={date}
        staffmembers={staffmembers}
      />
      <AvailibityFooter />
    </Page>
  </Document>
);
