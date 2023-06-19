import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <View style={styles.logoBg}>
        <Image
          style={styles.logoBgChild}
          resizeMode="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoBgChild: {
    marginTop: -95,
    marginLeft: -101,
    top: "50%",
    left: "50%",
    width: 202,
    height: 202,
    position: "absolute",
  },
  logoBg: {
    top: 0,
    left: 0,
    backgroundColor: Color.ghostwhite_200,
    width: 390,
    overflow: "hidden",
    position: "absolute",
    height: 844,
  },
  logo: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Logo;
