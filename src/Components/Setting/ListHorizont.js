import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../styles/colors';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
const ListHorizont = ({icon, onPress, title, iconRight}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: moderateVerticalScale(6),
        marginBottom: moderateVerticalScale(20),
      }}
      activeOpacity={0.8}
      onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: moderateScale(42),
            height: moderateScale(42),
            backgroundColor: colors.yellow,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(8),
          }}>
          <FastImage
            source={icon}
            style={{width: moderateScale(18), height: moderateScale(18)}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text
          style={{
            fontSize: scale(14),
            fontWeight: '500',
            color: colors.black,
            marginLeft: moderateScale(12),
          }}>
          {title}
        </Text>
      </View>
      <FastImage
        source={iconRight}
        style={{width: 8, height: 16}}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ListHorizont;
