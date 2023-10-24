import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import colors from '../styles/colors';
import {
  moderateScale,
  scale,
  moderateVerticalScale,
} from 'react-native-size-matters';

const ItemListHorizontal = ({
  onPress = () => {},
  list,
  selected,
  setSelected,
  myStyle,
  style,
}) => {
  return (
    <View style={{...styles.mainItemContainer, ...style}}>
      <ScrollView
        // style={styles.scrollerConatianer}
        contentContainerStyle={styles.scrollerConatianer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {list.map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                {
                  backgroundColor:
                    item === selected ? colors.white : colors.itemSelectorbg,
                },
                myStyle,
              ]}
              activeOpacity={0.5}
              onPress={() => setSelected(item)}
              key={index}>
              <Text
                style={[
                  styles.itemText,
                  {
                    color: item === selected ? colors.black : colors.gray,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainItemContainer: {
    backgroundColor: colors.itemSelectorbg,
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    height: moderateScale(50),
  },
  itemContainer: {
    backgroundColor: colors.itemSelectorbg,
    marginRight: moderateScale(8),
    paddingHorizontal: moderateScale(14),
    height: moderateScale(30),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
  },
  scrollerConatianer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: scale(12),
    color: colors.gray,
  },
});

export default ItemListHorizontal;
