import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LocationConfirmation = () => {
  return <View style={styles.locationConfirmation} />;
};

const styles = StyleSheet.create({
  locationConfirmation: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.ghostwhite_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LocationConfirmation;
