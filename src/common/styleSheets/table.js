import { StyleSheet } from "@react-pdf/renderer";

export const tableStyles = StyleSheet.create({
  table: {
    flexWrap: "wrap",
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
  },
  row: {
    flexDirection: "row",
    width: "100%",
  },
  col: {
    flexGrow: 1,
    padding: "10px 5px",
    textAlign: "center",
    alignItems: "center",
    border: "1px solid black",
  },
  col1: {
    width: "10%",
    padding: "10px 5px",
    textAlign: "center",
    alignItems: "center",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
  },
  col2: {
    width: "16%",
    padding: "10px 5px",
    textAlign: "center",
    alignItems: "center",
    borderBottom: "1px solid black",
    borderRight: "1px solid black",
  },
});
