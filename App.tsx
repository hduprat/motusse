import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [hasBeenLoaded] = useFonts({
    Mytupi: require("./assets/fonts/mytupi.ttf"),
  });

  if (!hasBeenLoaded) return <AppLoading />;
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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