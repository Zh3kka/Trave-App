import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome" as never)}>
        <Text>На главную</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
