import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignupOTP = () => {
  return (
    <View style={styles.signupOtp}>
      <Image
        style={[styles.signupOtpChild, styles.signupPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.signupOtpItem, styles.signupPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Image
        style={[styles.signupOtpItem, styles.signupPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupLayout]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={styles.verify}>Verify</Text>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-15.png")}
        />
        <Image
          style={styles.arrowIcon}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Text style={[styles.sendAgain, styles.sendAgainTypo]}>SEND AGAIN</Text>
      </View>
      <View style={[styles.verifyPhoneNumberParent, styles.signupPosition]}>
        <Text style={[styles.verifyPhoneNumber, styles.sendAgainTypo]}>
          Verify Phone Number
        </Text>
        <Text style={[styles.weHaveSent, styles.textTypo]}>{`
We have Sent An OTP To Your Phone Number`}</Text>
        <Text style={[styles.text, styles.textTypo]}>+0000 0000 0000</Text>
      </View>
      <Image
        style={[styles.cart1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/cart-1.png")}
      />
      <Image
        style={[styles.package1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/package-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signupPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    width: 55,
    borderRadius: Border.br_mid,
    top: 0,
    height: 60,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupPosition: {
    width: 290,
    marginLeft: -145,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sendAgainTypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    color: Color.silver_100,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  signupOtpChild: {
    marginTop: -422,
    marginLeft: -195,
    width: 390,
    position: "absolute",
    height: 844,
  },
  signupOtpItem: {
    marginTop: -155,
    marginLeft: -177,
    width: 354,
    height: 475,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 78,
  },
  groupInner: {
    left: 156,
  },
  rectangleView: {
    left: 234,
  },
  rectangleParent: {
    top: 475,
    left: 49,
    width: 289,
    height: 60,
    position: "absolute",
  },
  groupChild1: {
    marginTop: -69.5,
    backgroundColor: Color.sandybrown_100,
    height: 70,
    borderRadius: Border.br_31xl,
  },
  verify: {
    top: 20,
    left: 30,
    fontSize: FontSize.size_3xl,
    color: Color.ghostwhite_200,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleIcon: {
    top: 10,
    left: 214,
    width: 72,
    height: 50,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  arrowIcon: {
    marginTop: -45.55,
    right: 16,
    width: 32,
    height: 22,
    top: "50%",
    position: "absolute",
  },
  sendAgain: {
    top: 117,
    left: 90,
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
  },
  rectangleGroup: {
    marginTop: 146,
    height: 139,
  },
  verifyPhoneNumber: {
    marginTop: -64.5,
    marginLeft: -132,
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
  },
  weHaveSent: {
    top: 15,
    width: 308,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
  },
  text: {
    top: 111,
    left: 80,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  verifyPhoneNumberParent: {
    marginTop: -113,
    marginLeft: -153,
    height: 129,
    width: 308,
    position: "absolute",
  },
  cart1Icon: {
    width: 269,
    height: 322,
    left: 0,
  },
  package1Icon: {
    left: 111,
    width: 279,
    height: 410,
  },
  signupOtp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.white,
  },
});

export default SignupOTP;
