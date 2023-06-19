import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Orders = () => {
  return (
    <View style={styles.orders}>
      <View style={[styles.tabBar, styles.tabLayout]}>
        <View style={[styles.tabBarChild, styles.tabLayout]} />
        <Image
          style={[styles.arrowsRightArrow, styles.iconMapsBLayout]}
          resizeMode="cover"
          source={require("../assets/arrows--right-arrow.png")}
        />
        <Image
          style={styles.walletIcon}
          resizeMode="cover"
          source={require("../assets/wallet.png")}
        />
        <View style={[styles.darhboard, styles.darhboardLayout1]}>
          <View style={[styles.darhboardChild, styles.rectangleViewLayout]} />
          <View style={[styles.darhboardItem, styles.darhboardLayout]} />
          <View
            style={[styles.darhboardInner, styles.darhboardChildPosition]}
          />
          <View style={[styles.rectangleView, styles.darhboardChildPosition]} />
        </View>
        <Image
          style={[styles.favoriteLightIcon, styles.darhboardLayout1]}
          resizeMode="cover"
          source={require("../assets/favorite-light.png")}
        />
        <View style={[styles.ticketUseLight, styles.ticketSpaceBlock]}>
          <Image
            style={[styles.intersectIcon, styles.intersectIconLayout]}
            resizeMode="cover"
            source={require("../assets/intersect.png")}
          />
          <Image
            style={[styles.ticketUseLightChild, styles.ticketPosition]}
            resizeMode="cover"
            source={require("../assets/star-1.png")}
          />
        </View>
      </View>
      <View style={[styles.card2, styles.card2Layout]}>
        <View style={[styles.background, styles.backgroundLayout]} />
        <View style={styles.ourier}>
          <Text style={[styles.date, styles.noFlexBox]}>24.07.22 12:30</Text>
          <View style={styles.rank}>
            <Text style={[styles.title, styles.streetFlexBox]}>4.8</Text>
            <Image
              style={[styles.iconStar, styles.pricePosition1]}
              resizeMode="cover"
              source={require("../assets/icon-star.png")}
            />
          </View>
          <Text style={[styles.state, styles.streetLayout]}>Will deliver</Text>
          <Text style={[styles.name, styles.streetLayout]}>Eno Bassey</Text>
          <Image
            style={[styles.pxphotoIcon, styles.ordersItemPosition]}
            resizeMode="cover"
            source={require("../assets/40pxphoto.png")}
          />
        </View>
        <View style={[styles.address, styles.addressPosition]}>
          <View style={[styles.dotB, styles.dotPosition]}>
            <Text style={[styles.sity, styles.sityPosition]}>
              Georgia, Batumi
            </Text>
            <Text style={[styles.street, styles.sityPosition]}>
              1 Sherif Khimshiashvili St
            </Text>
            <Image
              style={[styles.iconMapsB, styles.iconMapsBLayout]}
              resizeMode="cover"
              source={require("../assets/icon-maps-b.png")}
            />
          </View>
          <View style={styles.line} />
          <View style={styles.dot}>
            <Text style={[styles.sity1, styles.streetFlexBox]}>
              Georgia, Batumi
            </Text>
            <Text style={[styles.street1, styles.streetLayout]}>
              24 Rustaveli Ave St
            </Text>
            <Image
              style={[styles.iconMapsB, styles.iconMapsBLayout]}
              resizeMode="cover"
              source={require("../assets/icon-maps-a.png")}
            />
          </View>
        </View>
        <View style={[styles.line1, styles.lineLayout]} />
        <View style={[styles.line2, styles.lineLayout]} />
        <View style={[styles.status, styles.statusFlexBox]}>
          <Text style={[styles.active, styles.activeTypo]}>Active</Text>
        </View>
        <View style={[styles.priceAndNumber, styles.pricePosition]}>
          <Text style={[styles.no, styles.noFlexBox]}>No. F15306</Text>
          <Text style={[styles.price, styles.sityTypo]}>₦‎ 1600.00</Text>
          <Image
            style={[styles.iconNavigation, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-navigation.png")}
          />
        </View>
      </View>
      <View style={[styles.card1, styles.card1Layout]}>
        <View style={[styles.background1, styles.card1Layout]} />
        <View style={[styles.address1, styles.dot1Layout]}>
          <View style={[styles.dotB1, styles.dotPosition]}>
            <Text style={[styles.sity2, styles.sityTypo]}>Ikeja Lagos.</Text>
            <Text style={[styles.street2, styles.title1Typo]}>
              54, Palm Spring Avenue
            </Text>
            <Image
              style={[styles.iconMapsB, styles.iconMapsBLayout]}
              resizeMode="cover"
              source={require("../assets/icon-maps-b.png")}
            />
          </View>
          <View style={styles.line} />
          <View style={[styles.dot1, styles.dot1Layout]}>
            <Text style={[styles.sity3, styles.sityTypo]}>Lagos 230942.</Text>
            <Text style={[styles.street3, styles.sityTypo]}>
              20, Adebisi Yetunde Street,
            </Text>
            <Image
              style={[styles.iconMapsB, styles.iconMapsBLayout]}
              resizeMode="cover"
              source={require("../assets/icon-maps-a.png")}
            />
          </View>
        </View>
        <View style={[styles.line1, styles.lineLayout]} />
        <View style={[styles.status1, styles.statusFlexBox]}>
          <Text style={[styles.processed, styles.activeTypo]}>Processed</Text>
        </View>
        <View style={[styles.priceAndNumber1, styles.pricePosition]}>
          <Text style={[styles.no, styles.noFlexBox]}>No. F15306</Text>
          <Text style={[styles.price, styles.sityTypo]}>₦‎ 1200.00</Text>
          <Image
            style={[styles.iconNavigation, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-navigation.png")}
          />
          <Image
            style={[styles.iconNavigation, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-navigation.png")}
          />
        </View>
      </View>
      <View style={styles.segmentedpicker}>
        <View
          style={[styles.segmentedpickerOption, styles.segmentedpickerFlexBox]}
        >
          <Text style={[styles.label, styles.labelLayout]}>Outgoing</Text>
        </View>
        <View style={styles.segmentedpickerFlexBox}>
          <Text style={[styles.label1, styles.labelLayout]}>Inbox</Text>
        </View>
      </View>
      <View style={[styles.balance, styles.balanceLayout]}>
        <View style={[styles.balanceChild, styles.balanceLayout]} />
        <Image
          style={[styles.walletIcon1, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/wallet1.png")}
        />
        <Text style={[styles.title1, styles.title1Layout]}>₦‎ 6730.54</Text>
        <Image
          style={[styles.chevronIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/chevron.png")}
        />
      </View>
      <View style={styles.navigationBar} />
      <Image
        style={[styles.fadersIcon, styles.ordersPosition]}
        resizeMode="cover"
        source={require("../assets/faders.png")}
      />
      <Image
        style={[styles.ordersChild, styles.ordersPosition]}
        resizeMode="cover"
        source={require("../assets/group-78.png")}
      />
      <Text style={[styles.orders1, styles.ordersPosition]}>Orders</Text>
      <View style={[styles.ordersItem, styles.ordersItemPosition]} />
      <Text style={styles.menu}>Menu</Text>
      <Text style={[styles.favorite, styles.promoTypo]}>Favorite</Text>
      <Text style={[styles.promo, styles.promoTypo]}>Promo</Text>
      <Text style={[styles.myOrder, styles.promoTypo]}>My Order</Text>
      <View style={[styles.darhboard1, styles.iconPosition]}>
        <View style={[styles.darhboardChild1, styles.darhboardChildLayout1]} />
        <View style={[styles.darhboardChild2, styles.darhboardChildLayout]} />
        <View style={[styles.darhboardChild3, styles.darhboardChildLayout]} />
        <View style={[styles.darhboardChild4, styles.darhboardChildLayout1]} />
      </View>
      <Image
        style={[styles.favoriteLightIcon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/favorite-light1.png")}
      />
      <View style={[styles.ticketUseLight1, styles.ticketSpaceBlock]}>
        <Image
          style={styles.intersectIconLayout}
          resizeMode="cover"
          source={require("../assets/intersect1.png")}
        />
        <Image
          style={[styles.ticketUseLightItem, styles.ticketPosition]}
          resizeMode="cover"
          source={require("../assets/star-11.png")}
        />
      </View>
      <Image
        style={[styles.bagDuotoneIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/bag-duotone.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabLayout: {
    height: 717,
    width: 375,
    position: "absolute",
  },
  iconMapsBLayout: {
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  darhboardLayout1: {
    height: 30,
    width: 30,
    top: 637,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderWidth: 2,
    borderColor: "#faa556",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    bottom: "55.04%",
    top: "13.37%",
    width: "31.67%",
    height: "31.59%",
    display: "none",
    borderStyle: "solid",
    position: "absolute",
  },
  darhboardLayout: {
    bottom: "13.37%",
    top: "55.04%",
    display: "none",
    borderWidth: 2,
    borderColor: "#faa556",
    borderStyle: "solid",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    width: "31.67%",
    height: "31.59%",
    position: "absolute",
  },
  darhboardChildPosition: {
    left: "55%",
    right: "13.33%",
  },
  ticketSpaceBlock: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_9xs,
    height: 30,
    width: 30,
    position: "absolute",
  },
  intersectIconLayout: {
    zIndex: 0,
    height: 15,
    width: 17,
    borderRadius: 0,
  },
  ticketPosition: {
    zIndex: 1,
    position: "absolute",
  },
  card2Layout: {
    height: 281,
    width: 343,
    position: "absolute",
  },
  backgroundLayout: {
    borderRadius: Border.br_7xs,
    left: 0,
    backgroundColor: Color.white,
  },
  noFlexBox: {
    textAlign: "right",
    letterSpacing: 0,
    position: "absolute",
  },
  streetFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  pricePosition1: {
    top: 2,
    left: 0,
  },
  streetLayout: {
    lineHeight: 20,
    color: Color.textDark,
    fontSize: FontSize.size_mini,
    top: 0,
  },
  ordersItemPosition: {
    top: "50%",
    position: "absolute",
  },
  addressPosition: {
    height: 88,
    top: 104,
    left: 16,
  },
  dotPosition: {
    top: 48,
    height: 40,
    left: 0,
    position: "absolute",
  },
  sityPosition: {
    width: 268,
    left: 28,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  lineLayout: {
    height: 1,
    width: 311,
    backgroundColor: Color.gainsboro_200,
    left: 16,
    position: "absolute",
  },
  statusFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_9xs,
    top: 47,
    flexDirection: "row",
    height: 24,
    left: 16,
    position: "absolute",
  },
  activeTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.inter,
    lineHeight: 16,
  },
  pricePosition: {
    top: 15,
    height: 24,
    left: 16,
    position: "absolute",
  },
  sityTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  card1Layout: {
    height: 208,
    width: 343,
    position: "absolute",
  },
  dot1Layout: {
    width: 224,
    position: "absolute",
  },
  title1Typo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  segmentedpickerFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  labelLayout: {
    width: 154,
    display: "flex",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    lineHeight: 20,
    height: 16,
    fontFamily: FontFamily.inter,
    letterSpacing: 0,
    position: "absolute",
  },
  balanceLayout: {
    height: 48,
    position: "absolute",
  },
  iconPosition1: {
    top: 12,
    position: "absolute",
  },
  title1Layout: {
    lineHeight: 24,
    color: Color.textDark,
    textAlign: "left",
  },
  ordersPosition: {
    top: 34,
    position: "absolute",
  },
  promoTypo: {
    color: Color.slategray,
    fontSize: FontSize.size_5xs,
    top: 787,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    top: 755,
    height: 30,
    width: 30,
    position: "absolute",
  },
  darhboardChildLayout1: {
    bottom: "55%",
    top: "13.33%",
    height: "31.67%",
    borderWidth: 2,
    borderColor: "#faa556",
    borderStyle: "solid",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    width: "31.67%",
    position: "absolute",
  },
  darhboardChildLayout: {
    bottom: "13.33%",
    top: "55%",
    height: "31.67%",
    borderWidth: 2,
    borderColor: "#faa556",
    borderStyle: "solid",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    width: "31.67%",
    position: "absolute",
  },
  tabBarChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: "#f6f6f6",
    left: 0,
    top: 0,
  },
  arrowsRightArrow: {
    top: 35,
    left: 330,
    width: 20,
  },
  walletIcon: {
    height: "3.52%",
    width: "6.66%",
    top: "5.41%",
    right: "85.3%",
    bottom: "91.07%",
    left: "8.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  darhboardChild: {
    display: "none",
    left: "13.33%",
    right: "55%",
  },
  darhboardItem: {
    left: "13.33%",
    right: "55%",
  },
  darhboardInner: {
    bottom: "13.37%",
    top: "55.04%",
    display: "none",
    borderWidth: 2,
    borderColor: "#faa556",
    borderStyle: "solid",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    width: "31.67%",
    height: "31.59%",
    position: "absolute",
  },
  rectangleView: {
    display: "none",
    borderWidth: 2,
    borderColor: "#faa556",
    backgroundColor: Color.sandybrown_100,
    borderRadius: Border.br_12xs,
    bottom: "55.04%",
    top: "13.37%",
    width: "31.67%",
    height: "31.59%",
    borderStyle: "solid",
    position: "absolute",
  },
  darhboard: {
    left: 46,
  },
  favoriteLightIcon: {
    left: 130,
  },
  intersectIcon: {
    display: "none",
  },
  ticketUseLightChild: {
    top: 14,
    left: 11,
    width: 3,
    height: 3,
    display: "none",
  },
  ticketUseLight: {
    top: 664,
    left: 243,
  },
  tabBar: {
    top: 85,
    left: 8,
    height: 717,
    width: 375,
  },
  background: {
    height: 281,
    width: 343,
    position: "absolute",
    top: 0,
  },
  date: {
    left: 219,
    color: Color.textGrey,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.inter,
    textAlign: "right",
    lineHeight: 16,
    top: 24,
  },
  title: {
    left: 15,
    fontFamily: FontFamily.interRegular,
    color: Color.textGrey,
    fontSize: FontSize.size_smi,
    lineHeight: 16,
    letterSpacing: 0,
    top: 0,
  },
  iconStar: {
    width: 12,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  rank: {
    width: 35,
    height: 16,
    left: 52,
    top: 24,
    position: "absolute",
  },
  state: {
    left: 231,
    color: Color.textDark,
    textAlign: "right",
    letterSpacing: 0,
    position: "absolute",
    fontFamily: FontFamily.inter,
  },
  name: {
    color: Color.textDark,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.interRegular,
    left: 52,
    lineHeight: 20,
  },
  pxphotoIcon: {
    marginTop: -20,
    width: 40,
    height: 40,
    left: 0,
  },
  ourier: {
    top: 225,
    height: 40,
    width: 296,
    left: 16,
    position: "absolute",
  },
  sity: {
    color: Color.textGrey,
    fontSize: FontSize.size_smi,
    lineHeight: 16,
    top: 24,
  },
  street: {
    color: Color.textDark,
    lineHeight: 20,
    fontSize: FontSize.size_mini,
    top: 0,
  },
  iconMapsB: {
    width: 16,
    left: 0,
    top: 0,
  },
  dotB: {
    width: 296,
  },
  line: {
    top: 22,
    left: 7,
    borderColor: "rgba(231, 231, 231, 0.5)",
    borderRightWidth: 1,
    width: 1,
    height: 23,
    borderStyle: "solid",
    position: "absolute",
  },
  sity1: {
    left: 28,
    fontFamily: FontFamily.interRegular,
    color: Color.textGrey,
    fontSize: FontSize.size_smi,
    lineHeight: 16,
    letterSpacing: 0,
    top: 24,
  },
  street1: {
    left: 28,
    color: Color.textDark,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
  },
  dot: {
    width: 167,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  address: {
    width: 296,
    position: "absolute",
  },
  line1: {
    top: 87,
  },
  line2: {
    top: 208,
  },
  active: {
    color: "#4caf50",
  },
  status: {
    backgroundColor: "#f0f9f1",
  },
  no: {
    top: 4,
    right: 28,
    fontFamily: FontFamily.interRegular,
    color: Color.textGrey,
    fontSize: FontSize.size_smi,
    lineHeight: 16,
  },
  price: {
    fontSize: FontSize.size_mid,
    color: Color.textDark,
    top: 2,
    left: 0,
  },
  iconNavigation: {
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  priceAndNumber: {
    width: 323,
  },
  card2: {
    top: 475,
    left: 18,
    height: 281,
  },
  background1: {
    borderRadius: Border.br_7xs,
    left: 0,
    backgroundColor: Color.white,
    top: 0,
  },
  sity2: {
    left: 28,
    color: Color.textGrey,
    fontSize: FontSize.size_smi,
    lineHeight: 16,
    letterSpacing: 0,
    top: 24,
  },
  street2: {
    left: 28,
    color: Color.textDark,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    top: 0,
  },
  dotB1: {
    width: 177,
  },
  sity3: {
    left: 28,
    color: Color.textGrey,
    fontSize: FontSize.size_smi,
    top: 24,
  },
  street3: {
    color: Color.black,
    left: 28,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    top: 0,
  },
  dot1: {
    height: 40,
    left: 0,
    top: 0,
  },
  address1: {
    height: 88,
    top: 104,
    left: 16,
  },
  processed: {
    color: Color.secondary,
  },
  status1: {
    backgroundColor: "#fef7ec",
  },
  priceAndNumber1: {
    width: 319,
  },
  card1: {
    top: 243,
    left: 16,
  },
  label: {
    marginTop: -8,
    color: Color.sandybrown_100,
    width: 154,
    display: "flex",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    left: 8,
  },
  segmentedpickerOption: {
    borderRadius: 5,
    backgroundColor: Color.darkslateblue,
  },
  label1: {
    marginTop: -16,
    left: -69,
    width: 154,
    display: "flex",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.textDark,
  },
  segmentedpicker: {
    top: 183,
    height: 44,
    padding: 2,
    flexDirection: "row",
    borderRadius: Border.br_7xs,
    width: 343,
    left: 18,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  balanceChild: {
    right: 0,
    top: 0,
    borderRadius: Border.br_7xs,
    left: 0,
    backgroundColor: Color.white,
  },
  walletIcon1: {
    left: 12,
    width: 24,
    height: 24,
  },
  title1: {
    left: 44,
    top: 12,
    position: "absolute",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mid,
  },
  chevronIcon: {
    right: 4,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  balance: {
    top: 119,
    right: 16,
    left: 16,
  },
  navigationBar: {
    top: 63,
    width: 328,
    left: 25,
    height: 24,
    position: "absolute",
  },
  fadersIcon: {
    right: 37,
    width: 24,
    height: 24,
  },
  ordersChild: {
    right: 73,
    width: 24,
    height: 24,
  },
  orders1: {
    fontSize: 19,
    left: 25,
    lineHeight: 24,
    color: Color.textDark,
    textAlign: "left",
    fontWeight: "500",
    top: 34,
    fontFamily: FontFamily.inter,
    letterSpacing: 0,
  },
  ordersItem: {
    marginTop: 316,
    marginLeft: -175,
    left: "50%",
    borderRadius: Border.br_xl,
    height: 79,
    backgroundColor: Color.darkslateblue,
    width: 343,
    top: "50%",
  },
  menu: {
    left: 53,
    fontSize: FontSize.size_5xs,
    top: 787,
    color: Color.sandybrown_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  favorite: {
    left: 133,
  },
  promo: {
    left: 222,
  },
  myOrder: {
    left: 298,
  },
  darhboardChild1: {
    left: "13.33%",
    right: "55%",
  },
  darhboardChild2: {
    left: "13.33%",
    right: "55%",
  },
  darhboardChild3: {
    left: "55%",
    right: "13.33%",
  },
  darhboardChild4: {
    left: "55%",
    right: "13.33%",
  },
  darhboard1: {
    left: 50,
  },
  favoriteLightIcon1: {
    left: 134,
  },
  ticketUseLightItem: {
    top: -14,
    left: -11,
    width: 4,
    height: 4,
  },
  ticketUseLight1: {
    top: 782,
    left: 247,
  },
  bagDuotoneIcon: {
    left: 301,
  },
  orders: {
    borderRadius: 16,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Orders;
