import { StyleSheet } from "@react-pdf/renderer";

export const textStyles = StyleSheet.create({
  normal: {
    fontSize: 11,
  },
  normalRight: {
    fontSize: 11,
    textAlign: "right",
  },
  small: {
    fontFamily: "Open Sans",
    fontSize: 9,
  },
  smallPrimary: {
    fontFamily: "Open Sans",
    fontSize: 9,
    color: "#083b66",
  },
  bold: {
    fontSize: 11,
    fontFamily: "Open Sans",
    fontWeight: 600,
  },
});
