import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const MenuOverlay = () => {
  return (
    <View style={styles.menuOverlay}>
      <Image
        style={[styles.menuOverlayChild, styles.menuPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={styles.compassAltLightIcon}
        resizeMode="cover"
        source={require("../assets/compass-alt-light.png")}
      />
      <Image
        style={[styles.menuOverlayItem, styles.menuPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.walletFillIcon, styles.fillIconPosition]}
        resizeMode="cover"
        source={require("../assets/wallet-fill.png")}
      />
      <Image
        style={[styles.menuOverlayInner, styles.menuPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.infoFillIcon, styles.fillIconPosition]}
        resizeMode="cover"
        source={require("../assets/info-fill.png")}
      />
      <Text style={styles.ekeneOkafor}>{`Ekene 
Okafor`}</Text>
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-11.png")}
      />
      <Text style={[styles.trips, styles.helpTypo]}>Trips</Text>
      <Text style={[styles.help, styles.helpTypo]}>Help</Text>
      <Text style={[styles.wallet, styles.helpTypo]}>Wallet</Text>
      <View style={styles.ratingRectangle} />
      <Image
        style={styles.starFillIcon}
        resizeMode="cover"
        source={require("../assets/star-fill.png")}
      />
      <Text style={[styles.text, styles.helpTypo]}>4.90</Text>
      <View style={styles.profile}>
        <View style={styles.lol}>
          <Text style={styles.change}>Change</Text>
          <Text style={styles.profileCard}>Profile Card</Text>
          <Text style={styles.private}>Private</Text>
        </View>
        <View style={[styles.profileCard1, styles.profileCardLayout]}>
          <View style={[styles.profileCardChild, styles.childPosition]} />
          <Image
            style={styles.lifesaversAvatarIcon}
            resizeMode="cover"
            source={require("../assets/lifesavers-avatar.png")}
          />
          <Text
            style={[styles.varkBobBobiscoolgmailcom2, styles.varksedPosition]}
          >
            <Text style={styles.varkBob}>vark bob</Text>
            <Text style={styles.varkBob}>bobiscool@gmail.com</Text>
            <Text style={styles.varkBob}>23-645-9870</Text>
          </Text>
          <Text style={[styles.varksed, styles.varksedPosition]}>varksed</Text>
        </View>
        <View style={[styles.faq, styles.faqLayout]}>
          <View style={[styles.faqChild, styles.faqLayout]} />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.paymentMethods, styles.supportTypo]}>
            Payment Methods
          </Text>
        </View>
        <View style={[styles.faq, styles.faqLayout]}>
          <View style={[styles.faqChild, styles.faqLayout]} />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Text
            style={[styles.privacySafety, styles.supportTypo]}
          >{`Privacy & Safety`}</Text>
        </View>
        <View style={[styles.faq, styles.faqLayout]}>
          <View style={[styles.faqChild, styles.faqLayout]} />
          <Text style={[styles.support, styles.supportTypo]}>Support</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuPosition: {
    height: 72,
    width: 100,
    borderRadius: Border.br_3xs,
    marginTop: -286,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  fillIconPosition: {
    top: 148,
    height: 24,
    width: 24,
    position: "absolute",
  },
  helpTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  profileCardLayout: {
    height: 162,
    width: 328,
  },
  childPosition: {
    backgroundColor: Color.gray_100,
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  varksedPosition: {
    left: 119,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  faqLayout: {
    height: 68,
    width: 325,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "36.76%",
    top: "35.29%",
    width: "2.98%",
    height: "27.94%",
    position: "absolute",
    overflow: "hidden",
  },
  supportTypo: {
    fontSize: FontSize.size_xl,
    left: 37,
    top: 22,
    fontFamily: FontFamily.inter,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  menuOverlayChild: {
    marginLeft: -176,
  },
  compassAltLightIcon: {
    top: 151,
    left: 57,
    height: 24,
    width: 24,
    position: "absolute",
  },
  menuOverlayItem: {
    marginLeft: -49,
  },
  walletFillIcon: {
    left: 184,
  },
  menuOverlayInner: {
    marginLeft: 78,
  },
  infoFillIcon: {
    left: 311,
  },
  ekeneOkafor: {
    marginTop: -407,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.white,
    marginLeft: -170,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  arrowIcon: {
    top: 595,
    left: 288,
    width: 52,
    height: 22,
    position: "absolute",
  },
  trips: {
    left: 53,
    color: Color.black,
    top: 181,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  help: {
    left: 309,
    color: Color.black,
    top: 181,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  wallet: {
    left: 177,
    color: Color.black,
    top: 181,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  ratingRectangle: {
    marginTop: -336,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.sandybrown_100,
    width: 65,
    height: 23,
    marginLeft: -170,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  starFillIcon: {
    top: 83,
    left: 30,
    width: 21,
    height: 21,
    position: "absolute",
  },
  text: {
    marginTop: -333,
    marginLeft: -144,
    color: Color.ghostwhite_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
  },
  change: {
    top: 16,
    left: 268,
    color: "#ff9e2d",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  profileCard: {
    top: 12,
    fontSize: 26,
    width: 140,
    left: 0,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  private: {
    fontSize: FontSize.size_sm,
    top: 0,
    left: 0,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  lol: {
    width: 326,
    height: 42,
  },
  profileCardChild: {
    height: 162,
    width: 328,
  },
  lifesaversAvatarIcon: {
    top: 31,
    left: 23,
    width: 86,
    height: 100,
    position: "absolute",
  },
  varkBob: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.inter,
  },
  varkBobBobiscoolgmailcom2: {
    top: 63,
    width: 181,
  },
  varksed: {
    top: 35,
    fontFamily: FontFamily.inter,
    color: Color.black,
  },
  profileCard1: {
    marginTop: 15,
  },
  faqChild: {
    backgroundColor: Color.gray_100,
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  vectorIcon: {
    right: "7.85%",
    left: "89.17%",
  },
  paymentMethods: {
    width: 211,
  },
  faq: {
    marginTop: 15,
  },
  privacySafety: {
    width: 205,
  },
  support: {
    width: 125,
  },
  vectorIcon2: {
    right: "7.59%",
    left: "89.43%",
  },
  profile: {
    top: 254,
    left: 31,
    position: "absolute",
  },
  menuOverlay: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default MenuOverlay;
