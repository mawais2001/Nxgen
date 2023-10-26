import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';

function ContactList({icon, title, desc, onPress}) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <FastImage
          source={icon}
          style={styles.iconStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={{marginLeft: moderateScale(14), flex: 1.4}}>
        <Text style={styles.textStyle}>{desc}</Text>
        <Text style={[styles.textStyle, {fontSize: scale(14)}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F4F4F',
    borderRadius: moderateScale(8),
    width: '100%',
    paddingVertical: moderateVerticalScale(10),
    marginBottom: moderateVerticalScale(14),
  },
  textStyle: {
    fontSize: scale(12),
    color: colors.white,
    fontWeight: '500',
  },
  iconStyle: {
    width: moderateScale(36),
    height: moderateScale(36),
  },
});

export default ContactList;
