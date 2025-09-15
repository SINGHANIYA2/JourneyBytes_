import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function EditTripScreen({ route, navigation }) {
  const { trip, trips, setTrips, notify } = route.params;
  const [name, setName] = useState(trip.name);
  const [destination, setDestination] = useState(trip.destination);
  const [date, setDate] = useState(trip.date);

  const saveTrip = () => {
    const updatedTrips = trips.map(t => t.id === trip.id ? { ...t, name, destination, date } : t);
    setTrips(updatedTrips);
    notify(name);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput label="Trip Name" value={name} onChangeText={setName} />
      <TextInput label="Destination" value={destination} onChangeText={setDestination} />
      <TextInput label="Date" value={date} onChangeText={setDate} />
      <Button mode="contained" onPress={saveTrip} style={{ marginTop: 10 }}>Update Trip</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
});
