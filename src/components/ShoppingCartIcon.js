import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function ShoppingCartIcon(props) {
  console.log('props', props);
  const {navigate} = useNavigation();

  const cartItems = useSelector(state => state);
  console.log('cartItem', cartItems);

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigate('Cart')}>
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
      <Icon name="cart" size={32} color="#101010" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  itemCountContainer: {
    backgroundColor: '#ff7d7d',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    position: 'absolute',
    right: 22,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  itemCountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
