import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => {
    return (
      <View style={styles.card}>
        {children}
      </View>
    );
  };

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
        width: '100%',
        maxWidth: 400,
      },
});