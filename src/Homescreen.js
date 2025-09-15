import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Travel App</Text>
      <Button title="Search Trips" onPress={() => navigation.navigate("Search")} />
      <Button title="Explore Places" onPress={() => navigation.navigate("Explore")} />
      <Button title="My Trips" onPress={() => navigation.navigate("TripList")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 }
});