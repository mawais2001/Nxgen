import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../styles/colors';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
const ListHorizont = ({
  icon,
  onPress,
  title,
  iconRight,
  textRight = '',
  style,
  lefticonContainerStyle,
  leftIconStyle,
  headingStyle,
  rightTextStyle,
  rightIconSyle,
}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      activeOpacity={0.8}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{...styles.iconContainerStyle, ...lefticonContainerStyle}}>
          <FastImage
            source={icon}
            style={{...styles.leftIconStyle, ...leftIconStyle}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text style={{...styles.headingStyle, ...headingStyle}}>{title}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {textRight.length > 0 ? (
          <Text style={{...styles.rightTextStyle, ...rightTextStyle}}>
            {textRight}
          </Text>
        ) : null}
        <FastImage
          source={iconRight}
          style={{...styles.rightIconSyle, ...rightIconSyle}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateVerticalScale(6),
    marginBottom: moderateVerticalScale(20),
  },
  iconContainerStyle: {
    width: moderateScale(42),
    height: moderateScale(42),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
  },
  leftIconStyle: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  headingStyle: {
    fontSize: scale(14),
    fontWeight: '500',
    color: colors.black,
    marginLeft: moderateScale(12),
  },
  rightTextStyle: {
    paddingHorizontal: moderateScale(14),
    fontSize: scale(12),
    color: colors.placeholderColor,
    fontWeight: '500',
  },
  rightIconSyle: {
    // width: 8,
    // height: 16,
    width: moderateScale(12),
    height: moderateScale(12),
  },
});

export default ListHorizont;
