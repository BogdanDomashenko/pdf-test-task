import { Text, View } from "@react-pdf/renderer";
import { tableStyles } from "../../../../../../common/styleSheets/table";
import { textStyles } from "../../../../../../common/styleSheets/text";

export const AvailibityTableItem = ({
  id,
  lastName,
  firstName,
  nationality,
  location,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}) => (
  <View style={tableStyles.row}>
    <View style={tableStyles.col1}>
      <Text style={textStyles.small}>{id}</Text>
    </View>
    <View style={tableStyles.col2}>
      <Text style={textStyles.small}>{lastName}</Text>
    </View>
    <View style={tableStyles.col2}>
      <Text style={textStyles.small}>{firstName}</Text>
    </View>
    <View style={tableStyles.col2}>
      <Text style={textStyles.small}>{nationality}</Text>
    </View>
    <View style={tableStyles.col2}>
      <Text style={textStyles.small}>{location}</Text>
    </View>
    <View style={tableStyles.col1}>
      <Text style={textStyles.small}>{monday}</Text>
    </View>
    <View style={tableStyles.col1}>
      <Text style={textStyles.small}>{tuesday}</Text>
    </View>
    <View style={tableStyles.col1}>
      <Text style={textStyles.small}>{wednesday}</Text>
    </View>
    <View style={tableStyles.col1}>
      <Text style={textStyles.small}>{thursday}</Text>
    </View>
    <View style={tableStyles.col1}>
      <Text style={textStyles.small}>{friday}</Text>
    </View>
    <View style={tableStyles.col1}>
      <Text style={textStyles.small}>{saturday}</Text>
    </View>
    <View style={tableStyles.col1}>
      <Text style={textStyles.small}>{sunday}</Text>
    </View>
  </View>
);
