import React from 'react';
import { LogBox, StyleSheet, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      extraHeight={120}
      enableOnAndroid>
      <View style={styles.filler} />
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Last Name" style={styles.input} />
      <TextInput placeholder="Address 1" style={styles.input} />
      <TextInput placeholder="Address 2" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  filler: {
    height: 100,
    marginVertical: 50,
    backgroundColor: 'silver',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 24,
    marginBottom: 60,
  },
});

export default App;
