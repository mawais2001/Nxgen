import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';

const DrawerItemsList = ({label, icon, onPress, style}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...style}}
      onPress={onPress}
      activeOpacity={0.5}>
      <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
      <Text style={styles.drawerItemTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(26),
  },
  iconStyle: {
    width: moderateScale(18),
    height: moderateScale(18),
    tintColor: colors.drawerTextColor,
  },
  drawerItemTextStyle: {
    fontSize: scale(10),
    color: colors.drawerTextColor,
    fontWeight: '600',
    marginLeft: moderateScale(14),
  },
});

export default DrawerItemsList;
