import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import imagePath from '../../constants/imagePath';
import {
  moderateScale,
  moderateVerticalScale,
  s,
  scale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';
colors;

const LibraryHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.IconStyle}
          activeOpacity={0.5}
          onPress={onPress}>
          <Image
            style={styles.imgStyle}
            source={imagePath.drawerIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.titleStyle}> {title} </Text>
      </View>
      <TouchableOpacity>
        <Image
          source={imagePath.language}
          style={styles.languageIconStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.theme,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  IconStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(12),
  },
  imgStyle: {
    width: moderateScale(22),
    height: moderateScale(11),
  },
  languageIconStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  titleStyle: {
    fontSize: scale(16),
    color: colors.black,
    fontWeight: '500',
  },
});

export default LibraryHeader;
