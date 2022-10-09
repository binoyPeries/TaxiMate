import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { TaxiMateColors } from "./constants/colors";
import SideDrawer from "./components/SideDrawer";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light"></StatusBar>
      <SideDrawer />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  deafultScaffold: {
    flex: 1,
    backgroundColor: TaxiMateColors.backgroundColor,
  },
});
