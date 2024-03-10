import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MotivationalQuoteScreen = () => {
  const navigation = useNavigation();

  const showMotivationalQuote = (category) => {
    // You can implement logic to fetch and display quotes based on the category
    // For now, we'll just display a simple message.
    alert(`Here's a motivational quote about ${category}`);
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.block}
        onPress={() => showMotivationalQuote('Life')}>
        <Text style={styles.blockText}>Life</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.block}
        onPress={() => showMotivationalQuote('Love')}>
        <Text style={styles.blockText}>Love</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.block}
        onPress={() => showMotivationalQuote('Family')}>
        <Text style={styles.blockText}>Family</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.block}
        onPress={() => showMotivationalQuote('Study')}>
        <Text style={styles.blockText}>Study</Text>
      </TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  block: {
    width: '45%',
    aspectRatio: 1, // Square blocks
    backgroundColor: '#007bff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  blockText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default MotivationalQuoteScreen;
