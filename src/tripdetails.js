import React from 'react';
import { View, StyleSheet, Button, Alert, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';

export default function TripDetailScreen({ route }) {
  const { trip } = route.params;

  const viewMap = () => {
    Alert.alert('Map Placeholder', `Map view for ${trip.destination} coming soon!`);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={trip.name} subtitle={trip.destination} />
        <Card.Content>
          <Image source={trip.image} style={{ width: '100%', height: 200, marginBottom: 10 }} />
          <Text>Date: {trip.date}</Text>
          <Text>Cultural Insights: {trip.info}</Text>
        </Card.Content>
        <Card.Actions>
          <Button title="View Map" onPress={viewMap} />
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { marginVertical: 10 },
});
