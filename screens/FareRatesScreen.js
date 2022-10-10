import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../components/DefaultButton";
import DefaultTextInput from "../components/DefaultTextInput";
import { TaxiMateColors } from "../constants/colors";
import { CommonStyles } from "../constants/commonStyles";
import { DefaultContext } from "../contextProviders/DefaultContextProvider";
import FareRate from "../models/FareRates";
import { addFareRate } from "../services/localDbImpl/FareRateServiceImpl";

export default function FareRatesScreen() {
  const [firstKm, setFirstKm] = useState("");
  const [otherKms, setOtherKms] = useState("");
  const [waiting, setWaiting] = useState("");

  const { database, fareRateService } = useContext(DefaultContext);

  // to add rate data to the databse
  function addFareRateEntry() {
    let newRates = new FareRate("", "", firstKm, otherKms, waiting);
    fareRateService.addFareRate(database, newRates);
  }

  return (
    <View style={CommonStyles.DefaultContainer}>
      <DefaultTextInput
        hint="Enter amount"
        fieldName="First km"
        value={firstKm}
        onChangeText={(text) => setFirstKm(text)}
      />
      <DefaultTextInput
        hint="Enter amount"
        fieldName="Second km onwards"
        value={otherKms}
        onChangeText={(text) => setOtherKms(text)}
      />
      <DefaultTextInput
        hint="Enter amount"
        fieldName="Waiting time (per minute)"
        value={waiting}
        onChangeText={(text) => setWaiting(text)}
      />
      <View style={{ paddingTop: 15 }} />
      <DefaultButton
        title="Save"
        btnColor={TaxiMateColors.primaryVariant}
        onSubmit={addFareRateEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
