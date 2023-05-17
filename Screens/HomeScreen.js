import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Home({ navigation }) {
  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate("profile")}>
      <Text>BRAYAYIN</Text>
      <StatusBar style="auto" />
    </Pressable>
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
