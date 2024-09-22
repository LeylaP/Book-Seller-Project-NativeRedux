import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ShoppingCartIcon(props) {
  console.log('props', props);
  return (
    <View>
      <Icon name="cart" size={30} color="#101010" />
      <Text>ShoppingCartIcon</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
