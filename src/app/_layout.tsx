import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerTintColor: "white",
        headerBackButtonDisplayMode: "minimal",
        
        headerBackground() {
          <LinearGradient
            colors={["#0A0C26", "#1A1040", "#0A0C26"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          />;
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ title: "" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});
