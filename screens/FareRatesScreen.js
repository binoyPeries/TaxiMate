import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../components/DefaultButton";
import DefaultTextInput from "../components/DefaultTextInput";
import { TaxiMateColors } from "../constants/colors";
import { CommonStyles } from "../constants/commonStyles";

export default function FareRatesScreen() {
  return (
    <View style={CommonStyles.DefaultContainer}>
      <DefaultTextInput hint="Enter amount" fieldName="First km" />
      <DefaultTextInput hint="Enter amount" fieldName="Second km onwards" />
      <DefaultTextInput
        hint="Enter amount"
        fieldName="Waiting time (per minute)"
      />
      <View style={{ paddingTop: 15 }} />
      <DefaultButton title="Save" btnColor={TaxiMateColors.primaryVariant} />
    </View>
  );
}

const styles = StyleSheet.create({});
