import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TaxiMateColors } from "../constants/colors";

export default function DefaultButton(props) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        { backgroundColor: props.btnColor ?? TaxiMateColors.secondaryColor },
      ]}
    >
      <Text
        style={{
          color: "white",
          fontSize: 23,
          textAlign: "center",
          fontWeight: "400",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 8,
    borderRadius: 10,
    marginTop: 8,
    alignContent: "center",
  },
});
