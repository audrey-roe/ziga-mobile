import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PaymentMethodSignup = () => {
  return (
    <View style={styles.paymentMethodSignup}>
      <Image
        style={[styles.paymentMethodSignupChild, styles.paymentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.paymentMethodSignupItem, styles.paymentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Text style={[styles.paymentMethod, styles.nextFlexBox]}>
        Payment Method
      </Text>
      <View style={[styles.paymentMethodSignupInner, styles.parentLayout]} />
      <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
      <Text style={[styles.doThisLater, styles.nextFlexBox]}>
        DO THIS LATER
      </Text>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={styles.creditOrDebitCardWrapper}>
          <Text style={[styles.creditOrDebit, styles.cashTypo]}>
            Credit or Debit Card
          </Text>
        </View>
        <View style={[styles.cashParent, styles.cart1IconPosition]}>
          <Text style={[styles.cash, styles.cashTypo]}>{`Cash
`}</Text>
          <Image
            style={[styles.creditCardIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/credit-card.png")}
          />
        </View>
        <Image
          style={[styles.cashIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/cash.png")}
        />
      </View>
      <Text style={styles.selectYourPreferred}>
        Select your preferred payment method
      </Text>
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
      <Image
        style={[styles.cart1Icon, styles.cart1IconPosition]}
        resizeMode="cover"
        source={require("../assets/cart-1.png")}
      />
      <Image
        style={styles.package1Icon}
        resizeMode="cover"
        source={require("../assets/package-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paymentPosition: {
    left: "50%",
    top: "50%",
  },
  nextFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  parentLayout: {
    width: 290,
    position: "absolute",
  },
  cashTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    color: Color.silver_100,
    fontSize: FontSize.size_mini,
    height: 16,
    width: 238,
    position: "absolute",
  },
  cart1IconPosition: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    height: 47,
    width: 35,
    left: 0,
    position: "absolute",
  },
  paymentMethodSignupChild: {
    marginTop: -422,
    marginLeft: -195,
    width: 390,
    position: "absolute",
    height: 844,
  },
  paymentMethodSignupItem: {
    marginTop: -143,
    marginLeft: -176,
    width: 354,
    height: 475,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  paymentMethod: {
    marginTop: -113,
    marginLeft: -105,
    fontSize: FontSize.size_6xl,
    color: Color.gray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    left: "50%",
    top: "50%",
  },
  paymentMethodSignupInner: {
    marginTop: 146,
    marginLeft: -145,
    backgroundColor: Color.sandybrown_100,
    height: 70,
    borderRadius: Border.br_31xl,
    left: "50%",
    top: "50%",
  },
  next: {
    top: 588,
    left: 86,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.ghostwhite_200,
  },
  doThisLater: {
    top: 685,
    left: 128,
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    color: Color.gray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  creditOrDebit: {
    left: 0,
    top: 0,
  },
  creditOrDebitCardWrapper: {
    top: 15,
    height: 16,
    width: 238,
    left: 52,
    position: "absolute",
  },
  cash: {
    top: 57,
    left: 52,
    fontFamily: FontFamily.robotoRegular,
  },
  creditCardIcon: {
    top: 0,
  },
  cashParent: {
    height: 72,
    width: 290,
    position: "absolute",
  },
  cashIcon: {
    top: 41,
  },
  groupParent: {
    top: 391,
    left: 66,
    height: 88,
  },
  selectYourPreferred: {
    top: 356,
    left: 42,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    width: 308,
    color: Color.silver_100,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  rectangleIcon: {
    top: 578,
    left: 264,
    width: 72,
    height: 50,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  arrowIcon: {
    marginTop: 169.95,
    right: 66,
    width: 32,
    height: 22,
    top: "50%",
    position: "absolute",
  },
  cart1Icon: {
    width: 269,
    height: 322,
    position: "absolute",
  },
  package1Icon: {
    left: 111,
    width: 279,
    height: 410,
    top: 0,
    position: "absolute",
  },
  paymentMethodSignup: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default PaymentMethodSignup;
