import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import { theme } from "../../theme/index";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome.png")}
        style={styles.backgroundImage}
      />
      <View>
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={[styles.linerGradient, { width: wp(100), height: hp(70) }]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Travelling made easy!</Text>
          <Text
            className="text-neutral-200 font-medium"
            style={styles.subTitle}
          >
            Experience the world's best adventure around the world with us
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.bg(1) }]}
            onPress={() => navigation.navigate("Home" as never)}
          >
            <Text style={[styles.buttonText, { fontSize: wp(5) }]}>
              Let's go
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  textContainer: {
    padding: 20,
    marginTop: 32,
  },
  linerGradient: {
    position: "absolute",
    bottom: 0,
  },
  title: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
    marginBottom: 16,
  },
  subTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  button: {
    borderRadius: 999999,
    marginHorizontal: "auto",
    marginVertical: 16,
    alignItems: "center",
    padding: 12,
    paddingHorizontal: 48,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
