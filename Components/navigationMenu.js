import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo, Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  NavigationContext,
  useNavigationState,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import { useContext, useState } from "react";

export default function NavigationMenu() {
  const navigation = useContext(NavigationContext);
  const [path, setPath] = useState("");
  const state = useNavigationState((state) => state);
  const routeName = state.routeNames[state?.index];

  useEffect(() => {
    for (const i in state.routes) {
      if (parseInt(i) === state?.index) {
        console.log(state.routes[i].name);
        setPath(state.routes[i].name);
      }
    }
  }, [routeName]);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("home")}>
        <Entypo
          name="home"
          size={30}
          color={path === "home" ? "blue" : "black"}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("profile")}>
        <Feather
          name="pie-chart"
          size={30}
          color={path === "profile" ? "blue" : "black"}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("chart_screen")}>
        <AntDesign
          name="antdesign"
          size={30}
          color={path === "chart_screen" ? "blue" : "black"}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("payment")}>
        <MaterialIcons
          name="payment"
          size={30}
          color={path === "payment" ? "blue" : "black"}
        />
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
