import { StyleSheet, Text, View, Image } from "react-native";
import React, { FC } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

interface IDestinationCard {
  title: string;
  duration?: number;
  distance?: number;
  weather?: number;
  price?: number;
  shortDescription: string;
  longDescription?: string;
  imageUrl: string;
}

export const DestinationCard: FC<IDestinationCard> = ({
  title,
  duration,
  distance,
  weather,
  price,
  shortDescription,
  longDescription,
  imageUrl,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={imageUrl} style={styles.cardImage} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={[
          styles.linerGradient,
          {
            width: wp(44),
            height: hp(15),
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          },
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{shortDescription}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: wp(44),
    height: wp(65),
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    padding: 16,
    paddingVertical: 24,
    marginBottom: 20,
  },
  linerGradient: {
    position: "absolute",
    bottom: 0,
  },
  cardImage: {
    width: wp(44),
    height: wp(65),
    position: "absolute",
    borderRadius: 35,
  },
  heartIcon: {
    position: "absolute",
    top: -120,
    right: 0,
    borderRadius: 100,
    padding: 12,
    backgroundColor: "rgba(255, 255, 255,0.4)",
  },
  cardTitle: {
    color: "white",
    fontWeight: "700",
    fontSize: wp(4),
    marginBottom: 6,
  },
  cardDescription: {
    color: "white",
    fontSize: wp(2.7),
  },
});
