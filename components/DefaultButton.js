import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TaxiMateColors } from "../constants/colors";

export default function DefaultButton(props) {
  return (
    <TouchableOpacity style={styles.ButtonStyle}>
      <Text
        style={{
          color: "white",
          fontSize: 25,
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: TaxiMateColors.secondaryColor,
    padding: 8,
    borderRadius: 10,
    margin: 15,
    marginTop: 8,
  },
});
