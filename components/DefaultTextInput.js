import { StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { TaxiMateColors } from "../constants/colors";

export default function DefaultTextInput(props) {
  const [isActive, setActive] = useState(false);

  return (
    <View>
      <Text style={styles.textStyle}> {props.fieldName}</Text>
      <TextInput
        style={[
          styles.inputBoxStyle,
          {
            borderColor: isActive
              ? TaxiMateColors.secondaryColor
              : TaxiMateColors.primaryColor,
          },
        ]}
        placeholder={props.hint}
        selectionColor={TaxiMateColors.secondaryColor}
        keyboardType="numeric"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBoxStyle: {
    height: 50,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1.2,
    borderRadius: 10,
    fontSize: 15,
  },
  textStyle: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    paddingTop: 15,
    paddingBottom: 8,
    textTransform: "capitalize",
  },
});
