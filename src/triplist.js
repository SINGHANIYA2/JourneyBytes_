import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function TripListScreen({ navigation }) {
  const [trips, setTrips] = useState([
    { id: '1', name: 'Manali', destination: 'Himachal Pradesh', date: '2025-10-10', info: 'Solang Valley, Rohtang Pass', image: require('../../assets/images/manali.jpg') },
    { id: '2', name: 'Ooty', destination: 'Tamil Nadu', date: '2025-12-01', info: 'Nilgiri Mountain Railway, Botanical Garden', image: require('../../assets/images/ooty.jpg') },
    { id: '3', name: 'Jaipur', destination: 'Rajasthan', date: '2025-11-15', info: 'Amber Fort, Hawa Mahal', image: require('../../assets/images/jaipur.jpg') },
    { id: '4', name: 'Goa', destination: 'Goa', date: '2025-12-20', info: 'Beaches, Fort Aguada, Nightlife', image: require('../../assets/images/goa.jpg') },
  ]);

  const removeTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  const notify = (tripName) => {
    Alert.alert('Notification', `Your trip to ${tripName} has been updated!`);
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigation.navigate('AddTrip', { trips, setTrips })}>
        Add New Trip
      </Button>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.name} />
            <Card.Content>
              <Text>{item.destination}</Text>
              <Text>{item.date}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('TripDetail', { trip: item })}>Details</Button>
              <Button onPress={() => navigation.navigate('EditTrip', { trip: item, trips, setTrips, notify })}>Edit</Button>
              <Button onPress={() => removeTrip(item.id)}>Delete</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: { marginVertical: 5 },
});
