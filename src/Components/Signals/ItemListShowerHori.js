import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ItemListShowerHori = ({items, selected, setSelected}) => {
  // console.log(items);
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.item,
              selected === index ? styles.selectedItem : null,
            ]}
            onPress={() => setSelected(index)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    // flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: 'blue',
  },
  itemText: {
    color: 'black',
  },
});

export default ItemListShowerHori;
