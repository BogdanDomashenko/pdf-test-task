import { Text, View } from "@react-pdf/renderer";
import { mainStyles } from "../../../../common/styleSheets/main";
import { textStyles } from "../../../../common/styleSheets/text";
import { formatDate } from "../../../../common/utils/formatDate";
import { getWeekNumber } from "../../../../common/utils/getWeekNumber";
import { AvailibityTable } from "./AvailibityTable/AvailibityTable";

export const AvailibityBody = ({ addressor, addresse, date, staffmembers }) => {
  return (
    <>
      <View style={mainStyles.conteiner}>
        <View style={mainStyles.section}>
          <Text
            style={textStyles.small}
          >{`${addressor.firstName} ${addressor.lastName}  -  ${addressor.street}  -  ${addressor.postalCode} ${addressor.location}`}</Text>
        </View>
        <View style={mainStyles.subsection}>
          <Text style={textStyles.bold}>{addresse.companyName}</Text>
          <View style={mainStyles.subsection}>
            <Text style={textStyles.normal}>
              {`${addresse.firstName} ${addresse.lastName}`}
            </Text>
            <Text style={textStyles.normal}>
              {`${addresse.street} ${addresse.streetNumber}`}
            </Text>
            <Text style={textStyles.normal}>
              {`${addresse.postalCode} ${addresse.location}`}
            </Text>
          </View>
        </View>
        <View style={mainStyles.subsection}>
          <Text style={textStyles.normalRight}>{formatDate(date)}</Text>
        </View>
      </View>
      <View style={mainStyles.subsection}>
        <Text style={textStyles.normal}>
          Subject: Staff availibility at {getWeekNumber(date)}/
          {date.getFullYear()}
        </Text>
      </View>
      <View style={mainStyles.section}>
        <Text style={textStyles.normal}>Dear {addresse.companyName},</Text>
        <View style={mainStyles.subsection}>
          <Text style={textStyles.normal}>
            Hearby I inform you about the availibity of our staff by location
            and nationality for the current week.
          </Text>
          <Text style={textStyles.normal}>
            If you are interested in getting in touch with us, feel free to
            contact us.
          </Text>
          <Text style={textStyles.normal}>
            {addressor.companyName} is looking forward to support your event.
          </Text>
        </View>
        <View style={mainStyles.subsection}>
          <Text style={textStyles.normal}>With best regards,</Text>
        </View>
        <View style={mainStyles.subsection}>
          <Text style={textStyles.normal}>
            {addressor.firstName} {addressor.lastName}
          </Text>
        </View>
      </View>
      <View style={mainStyles.section}>
        <AvailibityTable date={date} staffmembers={staffmembers} />
      </View>
    </>
  );
};
