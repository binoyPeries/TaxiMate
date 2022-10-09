import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import DefaultButton from "../components/DefaultButton";
import { TaxiMateColors } from "../constants/colors";
import { CommonStyles } from "../constants/commonStyles";

export default function MeterScreen() {
  return (
    <>
      <ScrollView style={styles.DefaultContainer}>
        <TotalFare />
        <TripDetails />
        <FareDetails />
      </ScrollView>
      <View>
        <DefaultButton title="Start" />
      </View>
    </>
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
        <TripInfoRow subText="mins" mainText="11:0" />
      </View>
    </View>
  );
}

function FareDetails(props) {
  return (
    <View
      style={[
        styles.InfoConatiner,
        {
          borderColor: TaxiMateColors.primaryColor,
          height: 230,
          flex: 1,
          justifyContent: "flex-start",
        },
      ]}
    >
      <Text style={{ color: "white", fontSize: 23 }}>Fare Details</Text>
      <FareDetailsRow mainText="First kilometer : " subText="100" />
      <FareDetailsRow mainText="From second kilometer : " subText="110" />
      <FareDetailsRow mainText="Waiting Fee (per min) : " subText="10" />
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
          paddingRight: 5,
          fontWeight: "700",
        }}
      >
        {props.subText}
      </Text>
    </View>
  );
}

function FareDetailsRow(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "flex-end",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={[
          styles.MainSubTextColor,
          { fontSize: 18, color: "white", fontWeight: "normal" },
        ]}
      >
        {props.mainText}
      </Text>
      <Text
        style={{
          color: TaxiMateColors.secondaryColor,
          fontSize: 35,
          paddingRight: 15,
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

  ButtonStyle: {
    backgroundColor: TaxiMateColors.secondaryColor,
    padding: 8,
    borderRadius: 10,
    margin: 15,
    marginTop: 8,
  },
});
