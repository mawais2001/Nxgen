import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';

const HeaderWIthLabel = ({
  label,
  labelStyle,
  containerStyle,
  onPress,
  icon,
  iconStyle,
  style,
  iconSize = 16,
  resizeMode = 'cover',
}) => {
  const navigation = useNavigation();

  return (
    <View style={{...styles.container, ...containerStyle}}>
      <TouchableOpacity
        style={{...styles.headerIconContainer, ...style}}
        onPress={onPress ? onPress : () => navigation.goBack()}>
        {icon ? (
          <Image
            source={icon}
            style={{...styles.iconStyle, ...iconStyle}}
            resizeMode={resizeMode}
          />
        ) : (
          // <Ionicon name="chevron-back" size={iconSize} color={colors.black} />
          <Image
            source={imagePath.back}
            style={{width: moderateScale(12), height: moderateScale(12)}}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
      <Text style={{...styles.headerTextStyle, ...labelStyle}}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateVerticalScale(22),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: moderateScale(22),
    height: moderateScale(11),
  },
  headerIconContainer: {
    width: moderateScale(24),
    height: moderateScale(24),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12),
  },
  headerTextStyle: {
    fontSize: scale(18),
    color: colors.black,
    fontWeight: '500',
    marginLeft: moderateScale(14),
  },
});

export default HeaderWIthLabel;
