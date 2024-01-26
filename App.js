import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Main from './Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    paddingTop: 50
  },
});
