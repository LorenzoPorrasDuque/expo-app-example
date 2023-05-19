import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import NavigationMenu from "../Components/navigationMenu";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <NavigationMenu></NavigationMenu>
      <Text>BRAYAYIN</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
