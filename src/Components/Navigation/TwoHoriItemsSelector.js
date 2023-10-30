import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

function TwoHoriItemsSelector({
  firstItem,
  secondItem,
  selected,
  setSelected,
  style,
  itemContainerStyle,
  itemTextStyle,
}) {
  return (
    <View style={{...styles.listContainer, ...style}}>
      <TouchableOpacity
        style={{
          ...styles.itemContainer,
          ...itemContainerStyle,
          backgroundColor:
            selected === firstItem ? colors.theme : colors.borderColor,
        }}
        onPress={() => setSelected(firstItem)}
        activeOpacity={0.5}>
        <View>
          <Text
            style={{
              ...styles.itemTextStyle,
              ...itemTextStyle,
              color: selected === firstItem ? colors.black : colors.gray,
            }}>
            {firstItem}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...styles.itemContainer,
          ...itemContainerStyle,
          backgroundColor:
            selected === secondItem ? colors.theme : colors.borderColor,
        }}
        onPress={() => setSelected(secondItem)}
        activeOpacity={0.5}>
        <View>
          <Text
            style={{
              ...styles.itemTextStyle,
              ...itemTextStyle,
              color: selected === secondItem ? colors.black : colors.gray,
            }}>
            {secondItem}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.borderColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(28),
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.theme,
    borderRadius: moderateScale(28),
    paddingVertical: moderateVerticalScale(6),
    paddingVertical: moderateVerticalScale(8),
  },
  itemTextContainer: {},
  itemTextStyle: {
    fontSize: scale(12),
    color: colors.gray,
    fontWeight: '400',
  },
});

export default TwoHoriItemsSelector;
