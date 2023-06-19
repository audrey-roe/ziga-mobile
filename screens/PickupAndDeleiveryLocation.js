import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PickupAndDeleiveryLocation = () => {
  return (
    <View style={styles.pickupAndDeleiveryLocation}>
      <View style={[styles.vectorParent, styles.groupViewPosition]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-20.png")}
        />
        <Text
          style={[styles.adebisiYetundeStreet, styles.palmSpringAvenueTypo]}
        >
          20, Adebisi Yetunde Street, Lagos 230942
        </Text>
        <Image
          style={[styles.pinDuotoneLineIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/pin-duotone-line.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-6.png")}
        />
        <Text style={[styles.pickUpLocation, styles.locationTypo]}>
          Pick Up location
        </Text>
      </View>
      <View style={styles.myDeliveryParent}>
        <Text style={[styles.myDelivery, styles.textTypo]}>My Delivery</Text>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/arrow-21.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
        <Text style={[styles.requestDelivery, styles.requestDeliveryTypo]}>
          Request Delivery
        </Text>
      </View>
      <View style={[styles.vectorGroup, styles.groupPosition]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-20.png")}
        />
        <Text style={[styles.palmSpringAvenue, styles.palmSpringAvenueTypo]}>
          54, Palm Spring Avenue. Ikeja Lagos
        </Text>
        <Image
          style={[styles.pinAltDuotoneLineIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/pin-alt-duotone-line.png")}
        />
        <Text style={[styles.deliveryLocation, styles.locationTypo]}>
          Delivery Location
        </Text>
        <Image
          style={[styles.lineIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-6.png")}
        />
      </View>
      <View style={[styles.vectorContainer, styles.groupChild1Position]}>
        <Image
          style={[styles.groupChild1, styles.groupChild1Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Image
          style={[styles.creditCardDuotoneIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/credit-card-duotone.png")}
        />
        <Image
          style={[styles.moneyDuotoneLineIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/money-duotone-line.png")}
        />
        <Text style={[styles.paymentMethod, styles.textTypo]}>
          Payment Method
        </Text>
        <Text style={[styles.total, styles.textPosition]}>Total</Text>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/line-6.png")}
        />
        <Text style={[styles.cash, styles.cashTypo]}>Cash</Text>
        <Text style={[styles.text, styles.textPosition]}>₦‎ 1200.00</Text>
        <Text style={[styles.card, styles.cashTypo]}>Card</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-20.png")}
        />
        <Text
          style={[styles.noRidersAvailable, styles.requestDeliveryTypo]}
        >{`No Riders Available `}</Text>
        <Text style={[styles.pjQuest, styles.cashTypo]}>{`PJ Quest `}</Text>
        <Text style={[styles.preferredCourier, styles.locationTypo]}>
          Preferred Courier
        </Text>
        <Image
          style={[styles.groupChild4, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/line-6.png")}
        />
        <Image
          style={[styles.progressIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/progress.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupViewPosition: {
    height: 109,
    width: 354,
    left: "50%",
    top: "50%",
    marginLeft: -181,
    position: "absolute",
  },
  groupPosition: {
    marginLeft: -177,
    height: 109,
    width: 354,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  palmSpringAvenueTypo: {
    width: 241,
    color: Color.darkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    width: 300,
  },
  locationTypo: {
    width: 191,
    color: Color.black,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  rectanglePosition: {
    height: 50,
    width: 195,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  requestDeliveryTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupChild1Position: {
    height: 167,
    marginLeft: -177,
    width: 354,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 39,
    position: "absolute",
  },
  cashTypo: {
    width: 75,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    marginTop: -54.5,
    borderRadius: Border.br_xl,
  },
  adebisiYetundeStreet: {
    left: 69,
    top: 57,
  },
  pinDuotoneLineIcon: {
    left: 19,
    top: 61,
  },
  groupItem: {
    top: 47,
    left: 27,
    position: "absolute",
  },
  pickUpLocation: {
    top: 12,
    left: 27,
  },
  vectorParent: {
    marginTop: -305.5,
  },
  myDelivery: {
    top: 0,
    left: 114,
    width: 101,
    fontSize: FontSize.size_mid,
    color: Color.black,
    position: "absolute",
  },
  groupInner: {
    top: 3,
    left: -1,
    width: 21,
    height: 15,
    position: "absolute",
  },
  myDeliveryParent: {
    top: 48,
    left: 30,
    width: 215,
    height: 21,
    position: "absolute",
  },
  rectangleView: {
    marginTop: -25,
    marginLeft: -97.5,
    backgroundColor: Color.darkslateblue,
    borderRadius: Border.br_xl,
  },
  requestDelivery: {
    top: 14,
    left: 38,
    color: Color.sandybrown_100,
    width: 108,
    height: 19,
  },
  rectangleParent: {
    marginTop: 341.5,
    marginLeft: -102,
  },
  palmSpringAvenue: {
    top: 74,
    left: 64,
  },
  pinAltDuotoneLineIcon: {
    top: 71,
    left: 20,
  },
  deliveryLocation: {
    top: 19,
    left: 23,
  },
  lineIcon: {
    top: 50,
    left: 23,
    position: "absolute",
  },
  vectorGroup: {
    marginTop: -165.5,
  },
  groupChild1: {
    marginTop: -83.5,
    borderRadius: Border.br_xl,
  },
  creditCardDuotoneIcon: {
    top: 136,
    left: 23,
  },
  moneyDuotoneLineIcon: {
    top: 106,
    left: 23,
  },
  paymentMethod: {
    top: 84,
    fontSize: FontSize.size_xs,
    width: 113,
    left: 23,
    position: "absolute",
  },
  total: {
    width: 56,
    left: 23,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  groupChild2: {
    top: 72,
    left: 27,
    position: "absolute",
  },
  cash: {
    top: 109,
    fontSize: FontSize.size_sm,
    left: 51,
    width: 75,
  },
  text: {
    left: 242,
    width: 89,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  card: {
    top: 139,
    fontSize: FontSize.size_sm,
    left: 51,
    width: 75,
  },
  vectorContainer: {
    marginTop: 120.5,
  },
  noRidersAvailable: {
    top: 62,
    left: 157,
    color: "#ec6767",
    width: 122,
  },
  pjQuest: {
    left: 31,
    fontSize: FontSize.size_mini,
    top: 61,
  },
  preferredCourier: {
    top: 8,
    left: 27,
  },
  groupChild4: {
    height: 1,
    width: 300,
    left: 27,
  },
  progressIcon: {
    left: 303,
    top: 57,
  },
  groupView: {
    marginTop: -11.5,
  },
  pickupAndDeleiveryLocation: {
    backgroundColor: Color.ghostwhite_100,
    flex: 1,
    width: "100%",
    height: 867,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default PickupAndDeleiveryLocation;
