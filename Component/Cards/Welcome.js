import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>Welcome to the plant care app</Text>
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

export default Welcome;