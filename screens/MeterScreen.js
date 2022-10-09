import { View, Text, StyleSheet, ScrollView } from "react-native";
import DefaultButton from "../components/DefaultButton";
import { TaxiMateColors } from "../constants/colors";
import { CommonStyles } from "../constants/commonStyles";

export default function MeterScreen() {
  return (
    <>
      <ScrollView style={CommonStyles.DefaultContainer}>
        <TotalFare />
        <TripDetails />
        <FareDetails />
      </ScrollView>
      <View style={{ margin: 15 }}>
        <DefaultButton title="Start" />
      </View>
    </>
  );
}

function TotalFare(props) {
  return (
    <View style={styles.infoConatiner}>
      <Text style={styles.mainTextcolor}>Total Fare</Text>
      <FareInfoRow subText="Rs" mainText="350.00" />
    </View>
  );
}
function TripDetails(props) {
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={[styles.infoConatiner, { marginRight: 15, height: 130 }]}>
        <Text style={[styles.mainTextcolor, { fontSize: 23 }]}>Distance</Text>
        <TripInfoRow subText="km" mainText="11.0" />
      </View>
      <View style={[styles.infoConatiner, { height: 130 }]}>
        <Text style={[styles.mainTextcolor, { fontSize: 23 }]}>
          Waiting Time
        </Text>
        <TripInfoRow subText="mins" mainText="11:00" />
      </View>
    </View>
  );
}

function FareDetails(props) {
  return (
    <View
      style={[
        styles.infoConatiner,
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
      <Text style={styles.mainSubTextColor}>{props.mainText}</Text>
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
      <Text
        style={[styles.mainSubTextColor, { fontSize: 43, paddingRight: 5 }]}
      >
        {props.mainText}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 15,
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
          styles.mainSubTextColor,
          { fontSize: 18, color: "white", fontWeight: "normal" },
        ]}
      >
        {props.mainText}
      </Text>
      <Text
        style={{
          color: TaxiMateColors.primaryColor,
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
  infoConatiner: {
    ...CommonStyles.InfoBox,
    height: 150,
    justifyContent: "space-between",
  },

  mainTextcolor: {
    color: "white",
    fontSize: 28,
  },
  mainSubTextColor: {
    color: TaxiMateColors.primaryColor,
    fontSize: 57,
    fontWeight: "700",
    textAlign: "right",
  },

  buttonStyle: {
    backgroundColor: TaxiMateColors.secondaryColor,
    padding: 8,
    borderRadius: 10,
    margin: 15,
    marginTop: 8,
  },
});
