import {
  Defs,
  Image,
  LinearGradient,
  Rect,
  Stop,
  StyleSheet,
  Svg,
  View,
} from "@react-pdf/renderer";
import logo from "../../../../assets/availibity/Logo_company.jpg";

const styles = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerBackground: {},
  headerImage: {
    position: "absolute",
    width: 300,
    top: 20,
    right: 30,
    height: "100%",
  },
});

export const AvailibityHeader = () => (
  <View style={styles.header}>
    <Svg viewBox="0 0 55 10" style={styles.headerBackground}>
      <Defs>
        <LinearGradient id="myLinearGradient">
          <Stop offset="0%" stopColor="#020024" />
          <Stop offset="31.33%" stopColor="#04164e" />
          <Stop offset="94%" stopColor="#1c4271" />
        </LinearGradient>
      </Defs>
      <Rect width="100" height="100" fill="url('#myLinearGradient')" />
    </Svg>
    <View style={styles.headerImage}>
      <Image src={logo} />
    </View>
  </View>
);
