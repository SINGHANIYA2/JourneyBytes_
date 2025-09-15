// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3MRfbRgOQXJHDlbkjSPlFMoCP1edCCxN5KlRiJR5Xdi-ljP4zRQvaULUg5Tvk2GvIwk&usqp=CAU' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Explore the Beauty of Travel</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Register" onPress={() => navigation.navigate('Register')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
});
