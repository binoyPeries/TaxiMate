import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { TaxiMateColors } from "./constants/colors";
import SideDrawer from "./components/SideDrawer";
import { DefaultContextProvider } from "./contextProviders/DefaultContextProvider";

export default function App() {
  return (
    <DefaultContextProvider>
      <StatusBar style="light"></StatusBar>
      <SideDrawer />
    </DefaultContextProvider>
  );
}
