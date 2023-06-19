import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Onboard2 = () => {
  return (
    <View style={styles.onboard2}>
      <View style={styles.onboard2Child} />
      <View style={[styles.onboard2Item, styles.onboard2ItemPosition]} />
      <Image
        style={styles.vuesaxlineararrowRightIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright.png")}
      />
      <Text
        style={[styles.designedForComfort, styles.onboard2ItemPosition]}
      >{`Designed For Comfort
Woven With
Luxury`}</Text>
      <Image
        style={styles.delievery2Icon}
        resizeMode="cover"
        source={require("../assets/delievery-3.png")}
      />
      <Image
        style={styles.navigationIcon}
        resizeMode="cover"
        source={require("../assets/navigation2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onboard2ItemPosition: {
    left: "50%",
    position: "absolute",
  },
  onboard2Child: {
    top: 551,
    left: 0,
    backgroundColor: Color.darkslateblue,
    width: 390,
    height: 293,
    position: "absolute",
  },
  onboard2Item: {
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
  vuesaxlineararrowRightIcon: {
    top: 785,
    left: 352,
    width: 24,
    height: 24,
    position: "absolute",
  },
  designedForComfort: {
    marginTop: 173,
    marginLeft: -132,
    top: "50%",
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.ghostwhite_200,
    textAlign: "center",
  },
  delievery2Icon: {
    top: 119,
    left: 44,
    width: 500,
    height: 500,
    position: "absolute",
  },
  navigationIcon: {
    top: 795,
    left: 28,
    width: 65,
    height: 5,
    position: "absolute",
  },
  onboard2: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboard2;
