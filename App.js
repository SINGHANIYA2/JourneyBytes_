import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screens
import WelcomeScreen from "./src/screens/welcome";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ExploreScreen from "./src/screens/explore";
import TripListScreen from "./src/screens/triplist";
import TripDetailScreen from "./src/screens/tripdetails";
import EditTripScreen from "./src/screens/edittrips";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="TripList" component={TripListScreen} />
        <Stack.Screen name="TripDetail" component={TripDetailScreen} />
        <Stack.Screen name="EditTrip" component={EditTripScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}