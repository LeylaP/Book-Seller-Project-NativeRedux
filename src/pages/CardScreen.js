import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Seperator from '../components/Separator';
import {useNavigation} from '@react-navigation/native';

const CardScreen = () => {
  const cartItems = useSelector(state => state);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const removeItemFromCart = payload =>
    dispatch({
      type: 'REMOVE_TO_CART',
      payload,
    });

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => Seperator()}
        renderItem={({item}) => (
          <View style={styles.bookItemContainer}>
            <Image source={{uri: item.imgUrl}} style={styles.thumbnail} />
            <View style={styles.bookItemMetaContainer}>
              <Text style={styles.textTitle}>{item.name}</Text>
              <Text style={styles.textAuthor}>{item.author}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => removeItemFromCart(item)}>
                <Text style={styles.buttonText}>Remove - </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your Cart is Empty :( </Text>
            <TouchableOpacity
              style={styles.buttonEmpty}
              onPress={() => navigate('Books')}>
              <Text style={styles.buttonText}>Go to Books </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400',
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    right: 10,
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    padding: 5,
  },
  buttonEmpty: {
    borderRadius: 8,
    backgroundColor: 'blue',
    padding: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    gap: 10,
  },
  emptyText: {
    fontSize: 28,
  },
});

export default CardScreen;
