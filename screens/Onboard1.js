import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboard1 = () => {
  return (
    <View style={styles.onboard1}>
      <Image
        style={styles.onboard1Child}
        resizeMode="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <View style={[styles.onboard1Item, styles.onboard1ItemPosition]} />
      <Text
        style={[styles.refinementThatMatches, styles.onboard1ItemPosition]}
      >{`Refinement 
That Matches 
Your Style.`}</Text>
      <Image
        style={styles.vuesaxlineararrowRightIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright.png")}
      />
      <Image
        style={styles.delievery1Icon}
        resizeMode="cover"
        source={require("../assets/delievery-3.png")}
      />
      <Image
        style={styles.navigationIcon}
        resizeMode="cover"
        source={require("../assets/navigation3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onboard1ItemPosition: {
    left: "50%",
    position: "absolute",
  },
  onboard1Child: {
    top: 551,
    left: 0,
    width: 390,
    height: 293,
    position: "absolute",
  },
  onboard1Item: {
    marginLeft: 99,
    top: 762,
    borderTopLeftRadius: Border.br_36xl,
    backgroundColor: Color.sandybrown_100,
    width: 102,
    height: 132,
    transform: [
      {
        rotate: "-19.69deg",
      },
    ],
  },
  refinementThatMatches: {
    marginTop: 173,
    marginLeft: -86,
    top: "50%",
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.ghostwhite_200,
    textAlign: "center",
  },
  vuesaxlineararrowRightIcon: {
    top: 785,
    left: 352,
    width: 24,
    height: 24,
    position: "absolute",
  },
  delievery1Icon: {
    top: 119,
    left: 163,
    width: 500,
    height: 500,
    position: "absolute",
  },
  navigationIcon: {
    top: 795,
    left: 28,
    width: 71,
    height: 5,
    position: "absolute",
  },
  onboard1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboard1;
