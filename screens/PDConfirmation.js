import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PDConfirmation = () => {
  return (
    <View style={styles.pDConfirmation}>
      <Image
        style={styles.screenShot20230615At428}
        resizeMode="cover"
        source={require("../assets/screen-shot-20230615-at-428-1.png")}
      />
      <Image
        style={styles.mapsicleMapIcon}
        resizeMode="cover"
        source={require("../assets/mapsicle-map.png")}
      />
      <Image
        style={styles.pDConfirmationChild}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.pDConfirmationItem, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.pDConfirmationInner}
        resizeMode="cover"
        source={require("../assets/arrow-21.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={styles.text}>(4.8)</Text>
      <Text style={styles.enoBassey}>Eno Bassey</Text>
      <View
        style={[styles.pDConfirmationChild1, styles.rectangleViewPosition]}
      />
      <Image
        style={[styles.ratingIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/rating.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-75.png")}
      />
      <View style={styles.lineParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.yourDeliveryTime, styles.addressTypo]}>
          Your Delivery Time
        </Text>
        <Text style={[styles.minOnThe, styles.minOnTheTypo]}>
          25- 35 min (on the way)
        </Text>
        <Text style={[styles.pickUpAddress, styles.addressTypo]}>
          Pick Up Address
        </Text>
        <Text style={[styles.adebisiYetundeStreet, styles.minOnTheTypo]}>
          20, Adebisi Yetunde Street, Lagos 230942
        </Text>
        <Text style={[styles.deliveryAddress, styles.addressTypo]}>
          Delivery Address
        </Text>
        <Text style={[styles.palmSpringAvenue, styles.minOnTheTypo]}>
          54, Palm Spring Avenue. Ikeja Lagos
        </Text>
        <Image
          style={[styles.timeLightIcon, styles.lightIconLayout]}
          resizeMode="cover"
          source={require("../assets/time-light.png")}
        />
        <Image
          style={[styles.homeLightIcon, styles.lightIconLayout]}
          resizeMode="cover"
          source={require("../assets/home-light.png")}
        />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={[styles.homeDuotoneIcon, styles.lightIconLayout]}
          resizeMode="cover"
          source={require("../assets/home-duotone.png")}
        />
      </View>
      <Image
        style={[styles.pDConfirmationChild2, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-77.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: 30,
    position: "absolute",
  },
  rectangleViewPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    height: 35,
    width: 35,
    top: 545,
    position: "absolute",
  },
  groupLayout: {
    height: 27,
    width: 1,
    borderRightWidth: 1.3,
    borderColor: "#faa556",
    borderStyle: "solid",
    left: 11,
    position: "absolute",
  },
  addressTypo: {
    height: 11,
    color: Color.darkgray_100,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  minOnTheTypo: {
    color: Color.black,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  lightIconLayout: {
    height: 24,
    width: 24,
    left: 0,
    position: "absolute",
  },
  screenShot20230615At428: {
    top: -91,
    left: -822,
    width: 1287,
    height: 669,
    display: "none",
    position: "absolute",
  },
  mapsicleMapIcon: {
    height: 531,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pDConfirmationChild: {
    top: 56,
    left: 149,
    width: 60,
    height: 60,
    position: "absolute",
  },
  pDConfirmationItem: {
    top: 72,
    left: 164,
    height: 30,
  },
  pDConfirmationInner: {
    top: 42,
    left: 30,
    width: 21,
    height: 15,
    position: "absolute",
  },
  rectangleView: {
    top: 505,
    backgroundColor: Color.darkslateblue,
    height: 339,
  },
  text: {
    top: 570,
    left: 170,
    fontSize: FontSize.size_5xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: Color.ghostwhite_100,
    position: "absolute",
  },
  enoBassey: {
    top: 546,
    left: 106,
    fontSize: FontSize.size_mid,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 98,
    textAlign: "left",
    color: Color.ghostwhite_100,
    position: "absolute",
  },
  pDConfirmationChild1: {
    top: 621,
    height: 223,
    backgroundColor: Color.ghostwhite_100,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
  },
  ratingIcon: {
    height: "1.07%",
    width: "13.85%",
    top: "67.65%",
    right: "58.97%",
    bottom: "31.28%",
    left: "27.18%",
  },
  groupIcon: {
    left: 276,
  },
  groupChild: {
    top: 103,
  },
  yourDeliveryTime: {
    width: 118,
    left: 52,
    top: 0,
    color: Color.darkgray_100,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
  },
  minOnThe: {
    top: 14,
    width: 191,
    left: 51,
    fontSize: FontSize.size_smi,
  },
  pickUpAddress: {
    left: 53,
    width: 111,
    top: 71,
  },
  adebisiYetundeStreet: {
    top: 85,
    width: 290,
    left: 52,
  },
  deliveryAddress: {
    width: 147,
    top: 140,
    left: 52,
  },
  palmSpringAvenue: {
    top: 154,
    width: 271,
    left: 51,
    fontSize: FontSize.size_smi,
  },
  timeLightIcon: {
    top: 3,
  },
  homeLightIcon: {
    top: 71,
  },
  groupItem: {
    top: 34,
  },
  homeDuotoneIcon: {
    top: 140,
  },
  lineParent: {
    top: 648,
    left: 25,
    width: 342,
    height: 170,
    position: "absolute",
  },
  pDConfirmationChild2: {
    left: 327,
  },
  icon: {
    top: 363,
    left: 72,
    height: 37,
  },
  vectorIcon: {
    height: "4.37%",
    width: "7.69%",
    top: "43.01%",
    right: "73.85%",
    bottom: "52.62%",
    left: "18.46%",
  },
  pDConfirmation: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.ghostwhite_100,
  },
});

export default PDConfirmation;
