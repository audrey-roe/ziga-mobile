import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Image
        style={styles.houseDoodle1}
        resizeMode="cover"
        source={require("../assets/house-doodle-1.png")}
      />
      <Image
        style={[styles.signUpChild, styles.signLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Text style={[styles.alreadyHaveAn, styles.signUp1Position]}>
        Already have an account?
      </Text>
      <Text
        style={styles.byClickingOn}
      >{`By clicking on a social option you may recieve an SMS                 
for verification. Message and data rates may apply.`}</Text>
      <Image
        style={[styles.flatColorIconsgoogle, styles.logosfacebookIconLayout]}
        resizeMode="cover"
        source={require("../assets/flatcoloriconsgoogle.png")}
      />
      <Image
        style={[styles.logosfacebookIcon, styles.logosfacebookIconLayout]}
        resizeMode="cover"
        source={require("../assets/logosfacebook.png")}
      />
      <View style={[styles.signUpItem, styles.signLayout]} />
      <Image
        style={[styles.signUpInner, styles.signLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-15.png")}
      />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Text style={[styles.signUp1, styles.signUp1Position]}>Sign up</Text>
      <View style={[styles.rectangleView, styles.signChildLayout]} />
      <View style={[styles.signUpChild1, styles.signChildLayout]} />
      <View style={[styles.signUpChild2, styles.signChildLayout]} />
      <View style={[styles.signUpChild3, styles.signChildLayout]} />
      <Image
        style={[styles.lockIcon, styles.lockIconLayout]}
        resizeMode="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={[styles.viewHideIcon, styles.viewIconPosition]}
        resizeMode="cover"
        source={require("../assets/view-hide.png")}
      />
      <View style={[styles.signUpChild4, styles.signChildLayout]} />
      <Text style={[styles.name, styles.passwordTypo]}>Name</Text>
      <View style={[styles.message, styles.lockIconLayout]}>
        <View style={[styles.messageChild, styles.messageLayout]} />
        <Image
          style={[styles.messageItem, styles.messageLayout]}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
      </View>
      <Text style={[styles.phone, styles.passwordTypo]}>{`Phone `}</Text>
      <Text style={[styles.email, styles.passwordTypo]}>Email</Text>
      <Text style={[styles.next, styles.passwordTypo]}>Next</Text>
      <Image
        style={styles.signUpChild5}
        resizeMode="cover"
        source={require("../assets/arrow-21.png")}
      />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.confirmPassword, styles.passwordTypo]}>
        Confirm password
      </Text>
      <Image
        style={[styles.viewHideIcon1, styles.viewIconPosition]}
        resizeMode="cover"
        source={require("../assets/view-hide.png")}
      />
      <Image
        style={[styles.userIcon, styles.lockIconLayout]}
        resizeMode="cover"
        source={require("../assets/user.png")}
      />
      <Image
        style={[styles.phoneIcon, styles.lockIconLayout]}
        resizeMode="cover"
        source={require("../assets/phone.png")}
      />
      <Image
        style={[styles.lockIcon1, styles.lockIconLayout]}
        resizeMode="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={styles.receipt1Icon}
        resizeMode="cover"
        source={require("../assets/receipt-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  signUp1Position: {
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  logosfacebookIconLayout: {
    height: 35,
    width: 35,
    top: 700,
    position: "absolute",
    overflow: "hidden",
  },
  signChildLayout: {
    height: 60,
    width: 304,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lockIconLayout: {
    height: 24,
    width: 24,
    left: 50,
    position: "absolute",
  },
  viewIconPosition: {
    left: 303,
    height: 24,
    width: 24,
    position: "absolute",
  },
  passwordTypo: {
    left: 92,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  messageLayout: {
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  houseDoodle1: {
    top: 0,
    left: 35,
    width: 146,
    height: 146,
    position: "absolute",
  },
  signUpChild: {
    marginTop: -319,
    marginLeft: -179,
    width: 354,
    height: 712,
    left: "50%",
    borderRadius: Border.br_31xl,
    top: "50%",
  },
  alreadyHaveAn: {
    marginTop: -290,
    marginLeft: 1,
    textDecoration: "underline",
    color: Color.orange_100,
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  byClickingOn: {
    top: 761,
    left: 33,
    fontFamily: FontFamily.robotoMedium,
    color: "#adadad",
    textAlign: "left",
    width: 343,
    height: 33,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  flatColorIconsgoogle: {
    left: 206,
  },
  logosfacebookIcon: {
    left: 149,
  },
  signUpItem: {
    marginTop: 183,
    marginLeft: -144,
    backgroundColor: Color.sandybrown_100,
    width: 290,
    height: 70,
    left: "50%",
    borderRadius: Border.br_31xl,
    top: "50%",
  },
  signUpInner: {
    top: 615,
    right: 51,
    width: 72,
    height: 50,
  },
  arrowIcon: {
    marginTop: 206.95,
    right: 62,
    width: 32,
    height: 22,
    top: "50%",
    position: "absolute",
  },
  signUp1: {
    marginTop: -257,
    marginLeft: -46,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
  },
  rectangleView: {
    marginTop: -206,
    marginLeft: -154,
    width: 304,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  signUpChild1: {
    marginTop: -131,
    marginLeft: -154,
    width: 304,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  signUpChild2: {
    marginTop: -54,
    marginLeft: -154,
    width: 304,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  signUpChild3: {
    marginTop: 23,
    marginLeft: -154,
    width: 304,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  lockIcon: {
    top: 465,
  },
  viewHideIcon: {
    top: 467,
  },
  signUpChild4: {
    marginTop: 100,
    marginLeft: -151,
  },
  name: {
    top: 238,
    color: Color.black,
    fontSize: FontSize.size_smi,
    left: 92,
  },
  messageChild: {
    height: "58.33%",
    width: "75%",
    top: "20.83%",
    right: "12.5%",
    bottom: "20.83%",
    left: "12.5%",
    borderStyle: "solid",
    borderColor: "#33363f",
    borderWidth: 2,
  },
  messageItem: {
    height: "23.58%",
    width: "70.39%",
    top: "33.77%",
    right: "14.8%",
    bottom: "42.65%",
    left: "14.8%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  message: {
    top: 387,
  },
  phone: {
    top: 314,
    color: Color.black,
    fontSize: FontSize.size_smi,
    left: 92,
  },
  email: {
    top: 390,
    color: Color.black,
    fontSize: FontSize.size_smi,
    left: 92,
  },
  next: {
    marginTop: 202,
    fontSize: FontSize.size_3xl,
    color: Color.ghostwhite_200,
    top: "50%",
  },
  signUpChild5: {
    top: 64,
    left: 25,
    width: 21,
    height: 15,
    position: "absolute",
  },
  password: {
    top: 469,
    color: Color.black,
    fontSize: FontSize.size_smi,
    left: 92,
  },
  confirmPassword: {
    top: 548,
    color: Color.black,
    fontSize: FontSize.size_smi,
    left: 92,
  },
  viewHideIcon1: {
    top: 544,
  },
  userIcon: {
    top: 233,
  },
  phoneIcon: {
    top: 313,
  },
  lockIcon1: {
    top: 542,
  },
  receipt1Icon: {
    top: 627,
    left: 245,
    width: 145,
    height: 217,
    position: "absolute",
  },
  signUp: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUp;
