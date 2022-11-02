import { Text, View } from "@react-pdf/renderer";
import { textStyles } from "../../../../../common/styleSheets/text";
import { tableStyles } from "../../../../../common/styleSheets/table";
import { AvailibityTableItem } from "./AvailibityTableItem/AvailibityTableItem";

const daysOfWeek = {
  Monday: "MO",
  Tuesday: "TU",
  Wednesday: "WE",
  Thursday: "TH",
  Friday: "FR",
  Saturday: "SA",
  Sunday: "SU",
};

const renderDayOfWeekHeader = (daysOfWeek, date) => {
  const dd = date.getDate();
  const mm = date.getMonth() + 1;

  return (
    <View style={tableStyles.col1} key={daysOfWeek}>
      <Text style={textStyles.small}>
        {dd}/{mm}
      </Text>
      <Text style={textStyles.small}>{daysOfWeek}</Text>
    </View>
  );
};

export const AvailibityTable = ({ date, staffmembers }) => {
  return (
    <View style={tableStyles.table}>
      <View style={tableStyles.header}>
        <View style={tableStyles.row}>
          <View style={tableStyles.col1}>
            <Text style={textStyles.small}>#</Text>
          </View>
          <View style={tableStyles.col2}>
            <Text style={textStyles.small}>Last name</Text>
          </View>
          <View style={tableStyles.col2}>
            <Text style={textStyles.small}>First name</Text>
          </View>
          <View style={tableStyles.col2}>
            <Text style={textStyles.small}>Nationality</Text>
          </View>
          <View style={tableStyles.col2}>
            <Text style={textStyles.small}>Location</Text>
          </View>
          {Object.values(daysOfWeek).map((day) =>
            renderDayOfWeekHeader(day, date)
          )}
        </View>
      </View>
      {staffmembers.map((staffmember) => (
        <AvailibityTableItem
          key={staffmember.id}
          id={staffmember.id}
          firstName={staffmember.firstName}
          lastName={staffmember.lastName}
          nationality={staffmember.nationality}
          location={staffmember.location}
          monday={staffmember.Monday}
          tuesday={staffmember.Tuesday}
          wednesday={staffmember.Wednesday}
          thursday={staffmember.Thursday}
          friday={staffmember.Friday}
          saturday={staffmember.Saturday}
          sunday={staffmember.Sunday}
        />
      ))}
    </View>
  );
};
