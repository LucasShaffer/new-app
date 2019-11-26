import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';
import Counter from './src/counter.js';
import Try from './src/try.js';
import counterStore from './src/counterStore';

export default function App() {
  return (
    <Provider counterStore={counterStore}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
