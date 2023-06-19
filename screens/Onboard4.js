import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Onboard4 = () => {
  return (
    <View style={styles.onboard4}>
      <View style={[styles.onboard4Child, styles.onboard4ChildPosition]} />
      <View style={[styles.onboard4Item, styles.onboard4ItemPosition]} />
      <Image
        style={styles.vuesaxlineararrowRightIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright.png")}
      />
      <Text
        style={[styles.fasterThanGokada, styles.onboard4ItemPosition]}
      >{`Faster than Gokada 
Smarter than 
Uber`}</Text>
      <Image
        style={[styles.delievery3Icon, styles.onboard4ChildPosition]}
        resizeMode="cover"
        source={require("../assets/delievery-3.png")}
      />
      <Image
        style={styles.navigationIcon}
        resizeMode="cover"
        source={require("../assets/navigation.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onboard4ChildPosition: {
    left: 0,
    position: "absolute",
  },
  onboard4ItemPosition: {
    left: "50%",
    position: "absolute",
  },
  onboard4Child: {
    top: 551,
    backgroundColor: Color.darkslateblue,
    width: 390,
    height: 293,
  },
  onboard4Item: {
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
  fasterThanGokada: {
    marginTop: 173,
    marginLeft: -121,
    top: "50%",
    fontSize: FontSize.size_6xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.ghostwhite_200,
    textAlign: "center",
  },
  delievery3Icon: {
    top: 119,
    width: 500,
    height: 500,
  },
  navigationIcon: {
    top: 795,
    left: 32,
    width: 71,
    height: 5,
    position: "absolute",
  },
  onboard4: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboard4;
