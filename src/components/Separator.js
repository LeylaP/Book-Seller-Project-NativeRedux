import {View, StyleSheet} from 'react-native';
import React from 'react';

function Seperator() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
  },
});
export default Seperator;
