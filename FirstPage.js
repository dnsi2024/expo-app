import { View, Text, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
const FirstPage = () => {
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();

  const navigateToWelcome = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/motivation.jpg')} />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <Text style={styles.creator}>Created by Nurhadisha</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Motivated!"
          onPress={navigateToWelcome} // Navigate to the Welcome screen
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 30,
  },
  creator: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
});

export default FirstPage;