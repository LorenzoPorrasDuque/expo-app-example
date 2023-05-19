import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo, Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { NavigationContext } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";

export default function NavigationMenu() {
  const navigation = useContext(NavigationContext);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("home")}>
        <Entypo name="home" size={30} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("profile")}>
        <Feather name="pie-chart" size={30} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("chart_screen")}>
        <AntDesign name="antdesign" size={30} color="black" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("payment")}>
        <MaterialIcons name="payment" size={30} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
