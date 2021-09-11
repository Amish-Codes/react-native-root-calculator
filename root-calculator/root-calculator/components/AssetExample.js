import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Root Calculator </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    padding: 15,
    fontWeight: 'bold',
    color: 'brown',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily:'Serif',
  },
});
