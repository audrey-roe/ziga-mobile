import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PaymentMenu = () => {
  return (
    <View style={styles.paymentMenu}>
      <View style={styles.paymentMenuChild} />
      <Image
        style={styles.paymentMenuItem}
        resizeMode="cover"
        source={require("../assets/arrow-2.png")}
      />
      <Image
        style={styles.paymentMenuInner}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View style={[styles.rectangleView, styles.groupInnerLayout]} />
      <View style={[styles.paymentMenuChild1, styles.promotionsParentLayout]} />
      <Text style={[styles.deliveryProfiles, styles.vouchersTypo]}>
        Delivery Profiles
      </Text>
      <Text style={styles.addPaymentMethod}>Add Payment Method</Text>
      <Text style={styles.payment}>Payment</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.vouchers, styles.vouchersTypo]}>Vouchers</Text>
        <Text style={styles.vouchers1}>Vouchers</Text>
        <Text style={[styles.addVoucherCode, styles.addTypo]}>
          Add Voucher Code
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-16.png")}
        />
      </View>
      <View style={[styles.promotionsParent, styles.promotionsParentLayout]}>
        <Text style={[styles.promotions, styles.vouchersTypo]}>Promotions</Text>
        <Text style={styles.promotions1}>Promotions</Text>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <Text style={[styles.addPromoCode, styles.addTypo]}>
          Add Promo Code
        </Text>
        <Image
          style={[styles.rectangleIcon, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-161.png")}
        />
        <Text style={[styles.addAPromo, styles.addAPromoTypo]}>
          Add a promo code for discount
        </Text>
      </View>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.paymentMenuChild2, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <View
        style={[
          styles.startUsingZigaForBusinessParent,
          styles.groupChildLayout,
        ]}
      >
        <Text style={[styles.startUsingZiga, styles.personalTypo]}>
          Start using Ziga for business
        </Text>
        <Text style={[styles.turnOnBusinessContainer, styles.addAPromoTypo]}>
          <Text style={styles.turnOnBusiness}>{`Turn on business `}</Text>
          <Text style={styles.logistics}>logistics</Text>
          <Text style={styles.turnOnBusiness}> features</Text>
        </Text>
      </View>
      <Text style={[styles.personal, styles.personalTypo]}>Personal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupInnerLayout: {
    height: 60,
    width: 335,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  promotionsParentLayout: {
    width: 335,
    position: "absolute",
  },
  vouchersTypo: {
    textAlign: "center",
    color: Color.darkslateblue,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChildLayout: {
    height: 37,
    position: "absolute",
  },
  addTypo: {
    color: Color.ghostwhite_200,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  groupItemLayout: {
    width: 49,
    position: "absolute",
  },
  addAPromoTypo: {
    fontSize: FontSize.size_sm,
    color: Color.darkgray_100,
    textAlign: "center",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 45,
    width: 45,
    left: 57,
    position: "absolute",
  },
  personalTypo: {
    fontSize: FontSize.size_mid,
    fontWeight: "500",
    color: Color.gray_300,
    textAlign: "center",
    position: "absolute",
  },
  paymentMenuChild: {
    backgroundColor: Color.darkslateblue,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  paymentMenuItem: {
    top: 78,
    left: 36,
    width: 32,
    height: 22,
    position: "absolute",
  },
  paymentMenuInner: {
    marginTop: -265,
    marginLeft: -177,
    width: 354,
    height: 635,
    borderRadius: Border.br_31xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangleView: {
    marginTop: 227,
    marginLeft: -167,
  },
  paymentMenuChild1: {
    marginTop: -130,
    marginLeft: -168,
    height: 148,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    width: 335,
    left: "50%",
    top: "50%",
  },
  deliveryProfiles: {
    top: 280,
    left: 51,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.darkslateblue,
  },
  addPaymentMethod: {
    top: 219,
    left: 49,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray_300,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  payment: {
    top: 110,
    left: 34,
    fontSize: 48,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.aliceblue,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    marginTop: 31,
    marginLeft: -81.5,
    backgroundColor: Color.sandybrown_100,
    height: 37,
    borderRadius: Border.br_31xl,
    left: "50%",
    top: "50%",
    width: 163,
  },
  vouchers: {
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    top: 0,
  },
  vouchers1: {
    left: 75,
    color: Color.darkgray_100,
    top: 49,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  addVoucherCode: {
    top: 107,
    left: 7,
    fontFamily: FontFamily.robotoSemibold,
    fontSize: FontSize.size_lg,
    color: Color.ghostwhite_200,
  },
  groupItem: {
    top: 46,
    left: 1,
    height: 28,
  },
  rectangleParent: {
    marginTop: 197,
    marginLeft: -151,
    height: 136,
    width: 163,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  promotions: {
    left: 15,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.darkslateblue,
    top: 0,
  },
  promotions1: {
    left: 91,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.darkgray_100,
    top: 49,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupInner: {
    marginTop: -40.5,
    marginLeft: -167.5,
  },
  groupChild1: {
    marginTop: 31.5,
    marginLeft: -157.5,
    width: 157,
    backgroundColor: Color.sandybrown_100,
    height: 37,
    borderRadius: Border.br_31xl,
    left: "50%",
    top: "50%",
  },
  addPromoCode: {
    top: 109,
    left: 23,
    fontSize: 16,
    fontFamily: FontFamily.interSemibold,
  },
  rectangleIcon: {
    top: 44,
    left: 19,
    height: 32,
  },
  addAPromo: {
    marginLeft: -75.5,
    top: 52,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
  },
  promotionsParent: {
    top: 483,
    left: 40,
    height: 137,
  },
  ellipseIcon: {
    top: 397,
  },
  paymentMenuChild2: {
    top: 327,
  },
  startUsingZiga: {
    fontFamily: FontFamily.robotoMedium,
    left: 0,
    top: 0,
  },
  turnOnBusiness: {
    fontFamily: FontFamily.robotoRegular,
  },
  logistics: {
    fontFamily: FontFamily.interRegular,
  },
  turnOnBusinessContainer: {
    top: 20,
    left: 0,
  },
  startUsingZigaForBusinessParent: {
    top: 401,
    width: 220,
    left: 132,
  },
  personal: {
    top: 339,
    left: 132,
    fontFamily: FontFamily.interMedium,
  },
  paymentMenu: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.aliceblue,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default PaymentMenu;
