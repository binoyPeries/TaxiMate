import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TaxiMateColors } from "../constants/colors";
import { CommonStyles } from "../constants/commonStyles";

export default function MeterScreen() {
  return (
    <ScrollView style={styles.DefaultContainer}>
      <TotalFare />
      <TripDetails />
    </ScrollView>
  );
}

function TotalFare(props) {
  return (
    <View style={styles.InfoConatiner}>
      <Text style={styles.MainTextcolor}>Total Fare</Text>
      <FareInfoRow subText="Rs" mainText="350.00" />
    </View>
  );
}
function TripDetails(props) {
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={[styles.InfoConatiner, { marginRight: 15, height: 130 }]}>
        <Text style={[styles.MainTextcolor, { fontSize: 23 }]}>Distance</Text>
        <TripInfoRow subText="km" mainText="11.0" />
      </View>
      <View style={[styles.InfoConatiner, { height: 130 }]}>
        <Text style={[styles.MainTextcolor, { fontSize: 23 }]}>
          Waiting Time
        </Text>
        <TripInfoRow subText="min" mainText="11:0" />
      </View>
    </View>
  );
}

function FareInfoRow(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "flex-end",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          paddingRight: 8,
          fontWeight: "700",
        }}
      >
        {props.subText}
      </Text>
      <Text style={styles.MainSubTextColor}>{props.mainText}</Text>
    </View>
  );
}

function TripInfoRow(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "flex-end",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Text style={[styles.MainSubTextColor, { fontSize: 45 }]}>
        {props.mainText}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          paddingRight: 8,
          fontWeight: "700",
        }}
      >
        {props.subText}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  InfoConatiner: {
    ...CommonStyles.InfoBox,
    height: 150,
    justifyContent: "space-between",
  },

  DefaultContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  MainTextcolor: {
    color: "white",
    fontSize: 28,
  },
  MainSubTextColor: {
    color: TaxiMateColors.primaryColor,
    fontSize: 57,
    paddingRight: 10,
    fontWeight: "700",
    textAlign: "right",
  },
});
