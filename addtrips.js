import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function AddTripScreen({ route, navigation }) {
  const { trips, setTrips } = route.params;
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const addTrip = () => {
    if (!name || !destination || !date) return;
    const newTrip = { id: Date.now().toString(), name, destination, date, info: 'Cultural info here', image: require('../../assets/images/manali.jpg') };
    setTrips([...trips, newTrip]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput label="Trip Name" value={name} onChangeText={setName} />
      <TextInput label="Destination" value={destination} onChangeText={setDestination} />
      <TextInput label="Date" value={date} onChangeText={setDate} />
      <Button mode="contained" onPress={addTrip} style={{ marginTop: 10 }}>Save Trip</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
});
