import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './src/style/styles'

import StackNav from './src/nav/mainStackNav'
// import styles from './src/style/styles';

export default class App extends React.Component {
  render() {
    return (
     <View style={styles.container}>
     <StackNav/>
     </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
