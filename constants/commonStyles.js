import { StyleSheet } from "react-native";
import { TaxiMateColors } from "./colors";

export const CommonStyles = StyleSheet.create({
  InfoBox: {
    padding: 12,
    backgroundColor: "#1D1D1D",
    borderRadius: 15,
    borderColor: TaxiMateColors.primaryColor,
    borderWidth: 0.5,
    flex: 1,
    marginBottom: 20,
  },
});
