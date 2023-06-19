import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={[styles.loginChild, styles.loginChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.signIn}>Sign in</Text>
      <View style={[styles.loginItem, styles.loginPosition]} />
      <View style={[styles.message, styles.messageLayout1]}>
        <View style={[styles.messageChild, styles.messageLayout]} />
        <Image
          style={[styles.messageItem, styles.messageLayout]}
          resizeMode="cover"
          source={require("../assets/vector-3.png")}
        />
      </View>
      <View style={[styles.loginInner, styles.loginPosition]} />
      <View style={[styles.rectangleView, styles.loginPosition]} />
      <View style={[styles.loginChild1, styles.loginPosition]} />
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-11.png")}
      />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
      <Text style={[styles.logIn, styles.emailTypo]}>{`Log in `}</Text>
      <Text style={[styles.forgotPassword, styles.signUpTypo]}>
        Forgot Password?
      </Text>
      <Image
        style={[styles.lockIcon, styles.messageLayout1]}
        resizeMode="cover"
        source={require("../assets/lock.png")}
      />
      <Image
        style={styles.locate1Icon}
        resizeMode="cover"
        source={require("../assets/locate-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildPosition: {
    left: "50%",
    top: "50%",
  },
  loginPosition: {
    height: 60,
    width: 330,
    marginLeft: -164,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  messageLayout1: {
    height: 24,
    width: 24,
    left: 47,
    position: "absolute",
  },
  messageLayout: {
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  signUpTypo: {
    textDecoration: "underline",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  loginChild: {
    marginTop: -242,
    marginLeft: -176,
    width: 354,
    height: 633,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  welcome: {
    marginTop: -286,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    marginLeft: -164,
    color: Color.white,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  signIn: {
    marginTop: -208,
    marginLeft: -41,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_6xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  loginItem: {
    marginTop: -136,
    backgroundColor: Color.white,
    width: 330,
    borderRadius: Border.br_3xs,
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
    top: 304,
  },
  loginInner: {
    marginTop: -60,
    backgroundColor: "#fffefe",
    borderRadius: Border.br_3xs,
  },
  rectangleView: {
    marginTop: 237,
    backgroundColor: Color.white,
    width: 330,
    borderRadius: Border.br_31xl,
  },
  loginChild1: {
    marginTop: 154,
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_31xl,
  },
  arrowIcon: {
    top: 595,
    left: 288,
    width: 52,
    height: 22,
    position: "absolute",
  },
  email: {
    top: 308,
    fontSize: FontSize.size_smi,
    left: 89,
    fontWeight: "500",
    color: Color.black,
  },
  password: {
    top: 384,
    fontSize: FontSize.size_smi,
    left: 89,
    fontWeight: "500",
    color: Color.black,
  },
  signUp: {
    top: 674,
    left: 152,
    color: Color.gray_400,
    fontSize: FontSize.size_5xl,
  },
  logIn: {
    top: 591,
    left: 160,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    color: Color.white,
  },
  forgotPassword: {
    marginTop: 16,
    marginLeft: -165,
    color: Color.orange_100,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
  },
  lockIcon: {
    top: 380,
  },
  locate1Icon: {
    top: 0,
    left: 0,
    width: 319,
    height: 246,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Login;
