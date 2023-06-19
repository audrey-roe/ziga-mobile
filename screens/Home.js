import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <Text style={styles.menu}>Menu</Text>
      <Text style={[styles.favorite, styles.promoTypo]}>Favorite</Text>
      <Text style={[styles.promo, styles.promoTypo]}>Promo</Text>
      <Text style={[styles.myOrder, styles.promoTypo]}>My Order</Text>
      <View style={[styles.darhboard, styles.lightIconLayout]}>
        <View style={[styles.darhboardChild, styles.darhboardLayout]} />
        <View style={[styles.darhboardItem, styles.darhboardPosition]} />
        <View style={[styles.darhboardInner, styles.rectangleViewLayout]} />
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      </View>
      <Image
        style={[styles.favoriteLightIcon, styles.lightIconLayout]}
        resizeMode="cover"
        source={require("../assets/favorite-light1.png")}
      />
      <View style={[styles.ticketUseLight, styles.lightIconLayout]}>
        <Image
          style={styles.intersectIcon}
          resizeMode="cover"
          source={require("../assets/intersect1.png")}
        />
        <Image
          style={styles.ticketUseLightChild}
          resizeMode="cover"
          source={require("../assets/star-11.png")}
        />
      </View>
      <Image
        style={[styles.bagDuotoneIcon, styles.lightIconLayout]}
        resizeMode="cover"
        source={require("../assets/bag-duotone.png")}
      />
      <View style={[styles.homeItem, styles.homeLayout]} />
      <Text style={[styles.food, styles.foodTypo]}>food</Text>
      <View style={[styles.homeInner, styles.homePosition]} />
      <View style={[styles.homeChild1, styles.homePosition]} />
      <View style={[styles.homeChild2, styles.homeLayout]} />
      <Text style={[styles.product, styles.foodTypo]}>Product</Text>
      <Text style={[styles.helloEkene, styles.helloEkeneTypo]}>
        Hello Ekene
      </Text>
      <Text style={[styles.welcomeBack, styles.welcomeBackTypo]}>
        Welcome Back
      </Text>
      <Text style={[styles.chooseWhatCourier, styles.helloEkeneTypo]}>
        Choose what Courier Service
      </Text>
      <Text style={[styles.youWantToday, styles.welcomeBackTypo]}>
        You want today
      </Text>
      <Image
        style={styles.bellPinLightIcon}
        resizeMode="cover"
        source={require("../assets/bell-pin-light.png")}
      />
      <Text style={[styles.movingTruck, styles.foodTypo]}>Moving truck</Text>
      <Text style={[styles.document, styles.foodTypo]}>document</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  promoTypo: {
    color: Color.slategray,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    top: 764,
    position: "absolute",
  },
  lightIconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  darhboardLayout: {
    borderWidth: 2,
    borderColor: "#faa556",
    borderStyle: "solid",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    left: "13.33%",
    right: "55%",
    width: "31.67%",
    height: "31.67%",
    position: "absolute",
  },
  darhboardPosition: {
    bottom: "13.33%",
    top: "55%",
  },
  rectangleViewLayout: {
    left: "55%",
    right: "13.33%",
    borderWidth: 2,
    borderColor: "#faa556",
    borderStyle: "solid",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    width: "31.67%",
    height: "31.67%",
    position: "absolute",
  },
  homeLayout: {
    height: 166,
    width: 161,
    backgroundColor: Color.gainsboro_100,
    left: 24,
    position: "absolute",
  },
  foodTypo: {
    height: 109,
    width: 92,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  homePosition: {
    left: 205,
    height: 166,
    width: 161,
    backgroundColor: Color.gainsboro_100,
    position: "absolute",
  },
  helloEkeneTypo: {
    height: 11,
    color: Color.darkgray_100,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  welcomeBackTypo: {
    width: 191,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  homeChild: {
    marginTop: 293,
    marginLeft: -172,
    top: "50%",
    left: "50%",
    backgroundColor: Color.darkslateblue,
    width: 343,
    height: 79,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  menu: {
    left: 56,
    color: Color.sandybrown_100,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    top: 764,
    position: "absolute",
  },
  favorite: {
    left: 136,
  },
  promo: {
    left: 225,
  },
  myOrder: {
    left: 301,
  },
  darhboardChild: {
    bottom: "55%",
    top: "13.33%",
  },
  darhboardItem: {
    borderWidth: 2,
    borderColor: "#faa556",
    borderStyle: "solid",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    left: "13.33%",
    right: "55%",
    width: "31.67%",
    height: "31.67%",
    position: "absolute",
  },
  darhboardInner: {
    bottom: "13.33%",
    top: "55%",
  },
  rectangleView: {
    bottom: "55%",
    top: "13.33%",
  },
  darhboard: {
    left: 53,
    top: 732,
    width: 30,
  },
  favoriteLightIcon: {
    left: 137,
    top: 732,
    width: 30,
  },
  intersectIcon: {
    borderRadius: 0,
    width: 17,
    height: 15,
    zIndex: 0,
  },
  ticketUseLightChild: {
    top: -14,
    left: -11,
    width: 4,
    height: 4,
    zIndex: 1,
    position: "absolute",
  },
  ticketUseLight: {
    top: 759,
    left: 250,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  bagDuotoneIcon: {
    left: 304,
    top: 732,
    width: 30,
  },
  homeItem: {
    top: 292,
  },
  food: {
    top: 339,
    left: 68,
  },
  homeInner: {
    top: 489,
  },
  homeChild1: {
    top: 292,
  },
  homeChild2: {
    top: 489,
  },
  product: {
    top: 539,
    left: 50,
  },
  helloEkene: {
    top: 61,
    left: 34,
    width: 105,
  },
  welcomeBack: {
    top: 83,
    left: 32,
    fontSize: FontSize.size_3xl,
    height: 14,
  },
  chooseWhatCourier: {
    top: 205,
    left: 38,
    width: 257,
  },
  youWantToday: {
    top: 227,
    left: 46,
    fontSize: FontSize.size_mid,
    width: 191,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  bellPinLightIcon: {
    top: 44,
    left: 342,
    width: 24,
    height: 24,
    position: "absolute",
  },
  movingTruck: {
    top: 546,
    left: 249,
  },
  document: {
    top: 313,
    left: 241,
  },
  home: {
    backgroundColor: Color.ghostwhite_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Home;
