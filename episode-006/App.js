import React from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardDismissMode="none"
      keyboardShouldPersistTaps="handled">
      <TextInput placeholder="Enter some text..." style={styles.input} />
      <Pressable style={styles.button} onPress={() => Alert.alert('Submitted')}>
        <Text style={styles.buttonTitle}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'silver',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 24,
  },
  button: {
    borderWidth: 1,
    backgroundColor: 'yellow',
    paddingVertical: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 24,
  },
});

export default App;
