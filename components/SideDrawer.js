import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import MeterScreen from "../screens/MeterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { TaxiMateColors } from "../constants/colors";
import FareRatesScreen from "../screens/FareRatesScreen";

const Drawer = createDrawerNavigator();

const DrawerTheme = {
  dark: true,
  colors: {
    primary: TaxiMateColors.primary,
    background: TaxiMateColors.backgroundColor,
    card: TaxiMateColors.backgroundColor,
    text: "white",
    border: TaxiMateColors.primaryColor,
    notification: "rgb(255, 69, 58)",
  },
};

export default function SideDrawer() {
  return (
    <NavigationContainer theme={DrawerTheme}>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: TaxiMateColors.backgroundColor,
            // marginTop: 40,
          },
          headerLeft: false,
          headerRight: () => <DrawerToggleButton tintColor="white" />,
          headerTitleAlign: "center",
          drawerPosition: "right",
          drawerActiveTintColor: TaxiMateColors.primaryColor,
          drawerAllowFontScaling: true,
          overlayColor: "rgba(187,134,252,0.3)",
          drawerHideStatusBarOnOpen: false,
          drawerLabelStyle: {
            fontSize: 16,
          },
        }}
      >
        <Drawer.Screen name="Meter" component={MeterScreen} />
        <Drawer.Screen name="Fare Rates " component={FareRatesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
