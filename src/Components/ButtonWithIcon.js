// import React from 'react';
// import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
// import {
//   ScaledSheet,
//   scale,
//   verticalScale,
//   moderateScale,
//   moderateVerticalScale,
// } from 'react-native-size-matters';
// import colors from '../styles/colors';
// import fontFamily from '../styles/fontFamily';

import {
  React,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  moderateScale,
  scale,
  moderateVerticalScale,
  colors,
  fontFamily,
} from '../common/CommonImports';

function ButtonWithIcon({
  title = '',
  style = {},
  onPress = () => {},
  textStyle = {},
  leftImg = null,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.container, ...style}}
      onPress={onPress}>
      {!!leftImg ? (
        <Image style={styles.leftIcon} source={leftImg} />
      ) : (
        <View />
      )}
      <Text style={{...styles.textStyle, ...textStyle}}> {title} </Text>
      <View />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreen,
    height: moderateVerticalScale(48),
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
  },
  textStyle: {
    color: colors.black,
    // fontFamily: fontFamily.regular,
    fontWeight: '500',
    fontSize: scale(12),
  },
  leftIcon: {
    width: moderateScale(22),
    height: moderateScale(22),
  },
});

export default ButtonWithIcon;
