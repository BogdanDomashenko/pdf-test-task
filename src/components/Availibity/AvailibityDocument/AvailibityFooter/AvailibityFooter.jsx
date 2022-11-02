import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import localityIcon from "../../../../assets/availibity/logo_locality.jpg";
import focusIcon from "../../../../assets/availibity/logo_focus.jpg";
import handshakeIcon from "../../../../assets/availibity/logo_handshake.jpg";
import { textStyles } from "../../../../common/styleSheets/text";

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    padding: "20px 80px",
    borderTop: "2px solid black",
  },
  item: {
    width: "20%",
    alignItems: "center",
    textAlign: "center",
  },
  icon: {
    marginBottom: 10,
    width: 30,
  },
});

export const AvailibityFooter = () => (
  <View style={styles.footer} wrap={false}>
    <View style={styles.item}>
      <Image src={localityIcon} style={styles.icon} />
      <Text style={textStyles.smallPrimary}>
        Schäringerstraße 3, 80634 München
      </Text>
    </View>
    <View style={styles.item}>
      <Image src={handshakeIcon} style={styles.icon} />
      <Text style={textStyles.smallPrimary}>089 127 38 676</Text>
    </View>
    <View style={styles.item}>
      <Image src={focusIcon} style={styles.icon} />
      <Text style={textStyles.smallPrimary}>info@arrimo-digital.de</Text>
    </View>
  </View>
);
