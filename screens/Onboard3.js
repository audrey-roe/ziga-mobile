import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Onboard3 = () => {
  return (
    <View style={styles.onboard3}>
      <View style={[styles.onboard3Child, styles.onboard3ChildPosition]} />
      <View style={[styles.onboard3Item, styles.onboard3ItemPosition]} />
      <Image
        style={styles.vuesaxlineararrowRightIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright.png")}
      />
      <Text
        style={[styles.fasterThanGokada, styles.onboard3ItemPosition]}
      >{`Faster than Gokada 
Smarter than 
Uber`}</Text>
      <Image
        style={[styles.delievery3Icon, styles.onboard3ChildPosition]}
        resizeMode="cover"
        source={require("../assets/delievery-3.png")}
      />
      <Image
        style={styles.navigationIcon}
        resizeMode="cover"
        source={require("../assets/navigation1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onboard3ChildPosition: {
    left: 0,
    position: "absolute",
  },
  onboard3ItemPosition: {
    left: "50%",
    position: "absolute",
  },
  onboard3Child: {
    top: 551,
    backgroundColor: Color.darkslateblue,
    width: 390,
    height: 293,
  },
  onboard3Item: {
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
    top: 801,
    left: 28,
    width: 68,
    height: 5,
    position: "absolute",
  },
  onboard3: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboard3;
