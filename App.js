import React from 'react';
import { StyleSheet, View } from 'react-native';
import Users from "./components/Users";

export default function App() {
  return (
    <View style={styles.container}>
      <Users/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
