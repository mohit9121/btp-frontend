import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Weather = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Today's Weather: 25°C in India</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    heading:{
      fontWeight: 'bold',
      fontSize: 15
  }
});

export default Weather;