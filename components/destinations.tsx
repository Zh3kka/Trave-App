import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { destinationData } from "../constants";
import { DestinationCard } from "./DestinationCard";

export const Destinations = () => {
  return (
    <View style={styles.container}>
      {destinationData.map((item, index) => {
        return (
          <DestinationCard
            key={index}
            title={item.title}
            shortDescription={item.shortDescription}
            imageUrl={item.image}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
