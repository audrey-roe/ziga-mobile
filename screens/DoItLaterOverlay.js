import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DoItLaterOverlay = () => {
  return (
    <View style={styles.doItLaterOverlay}>
      <View style={styles.doItLaterOverlayChild} />
      <Text style={styles.youWontBe}>{`You won’t be able to request 
a ride without adding a
payment method`}</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.doItLater, styles.doItLaterTypo]}>
          Do it Later
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.addPaymentMethod, styles.doItLaterTypo]}>
          Add Payment Method Now
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 58,
    width: 341,
    left: 40,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_mid,
    left: 0,
    top: 0,
    height: 58,
    width: 341,
    position: "absolute",
  },
  doItLaterTypo: {
    height: 25,
    textAlign: "left",
    color: Color.aliceblue,
    fontSize: FontSize.size_2xl_6,
    top: 16,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  doItLaterOverlayChild: {
    top: 15,
    left: 8,
    borderRadius: Border.br_31xl,
    backgroundColor: "rgba(243, 246, 255, 0.94)",
    width: 405,
    height: 330,
    position: "absolute",
  },
  youWontBe: {
    marginLeft: -158,
    top: 46,
    left: "50%",
    fontSize: FontSize.size_3xl,
    color: Color.gray_300,
    textAlign: "center",
    width: 315,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.darkgray_100,
    borderStyle: "solid",
    borderColor: "#edf6ff",
    borderWidth: 1,
  },
  doItLater: {
    left: 115,
    width: 150,
  },
  rectangleParent: {
    top: 217,
  },
  groupItem: {
    backgroundColor: Color.darkslateblue,
  },
  addPaymentMethod: {
    left: 41,
    width: 300,
  },
  rectangleGroup: {
    top: 151,
  },
  doItLaterOverlay: {
    flex: 1,
    width: "100%",
    height: 402,
    overflow: "hidden",
  },
});

export default DoItLaterOverlay;
