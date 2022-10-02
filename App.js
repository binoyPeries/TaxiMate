import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { TaxiMateColors } from "./constants/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MeterScreen from "./screens/MeterScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.deafultScaffold}>
        <MeterScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  deafultScaffold: {
    flex: 1,
    backgroundColor: TaxiMateColors.backgroundColor,
  },
});
