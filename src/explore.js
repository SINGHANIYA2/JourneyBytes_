// screens/ExploreScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Example data – you can later fetch from API
const places = [
  {
    id: '1',
    name: 'Athirappilly Waterfalls',
    location: 'Kerala',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/The_View_of_the_Athirapally_Falls_during_the_onset_of_Monsoon.jpg/2560px-The_View_of_the_Athirapally_Falls_during_the_onset_of_Monsoon.jpg'
  },
  {
    id: '2',
    name: 'Tirthan valley ',
    location: 'Himachal pradesh',
    image: 'https://www.himalayanecotourism.com/wp-content/uploads/2023/06/himalayan-ecotourism-tirthan-valley-07.jpg',
  },
  {
    id: '3',
    name: 'Wayanad Greenery',
    location: 'Kerala',
    image: 'https://www.google.com/imgres?q=wayanad&imgurl=https%3A%2F%2Fwww.keralatourism.org%2F_next%2Fimage%2F%3Furl%3Dhttp%253A%252F%252F127.0.0.1%252Fktadmin%252Fimg%252Fpages%252Fmobile%252Fwayanad-1714029912_e2cf3b30cf6d5cc36389.webp%26w%3D3840%26q%3D75&imgrefurl=https%3A%2F%2Fwww.keralatourism.org%2Fdestination%2Fwayanad-district%2F373%2F&docid=2ImO-7UfYliANM&tbnid=oXg858ts4kG1sM&vet=12ahUKEwjSh8qkjdqPAxVXXGcHHRJmJvwQM3oECCEQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjSh8qkjdqPAxVXXGcHHRJmJvwQM3oECCEQAA',
  },
];

export default function ExploreScreen({ navigation }) {
  const [placeList, setPlaceList] = useState(places);

  const renderPlace = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('TripDetails', { place: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Underrated Places</Text>
      <FlatList
        data={placeList}
        keyExtractor={(item) => item.id}
        renderItem={renderPlace}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
});
