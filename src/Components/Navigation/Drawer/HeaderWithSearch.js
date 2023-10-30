import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  Text,
  TextInput,
} from 'react-native';
import imagePath from '../../../constants/imagePath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../../../styles/colors';
import TextInputCompo from '../../TextInputCompo';

const HeaderWithSearch = ({
  onPress,
  searchText,
  setSearchText,
  icon,
  IconStyle,
  style,
  inputStyle,
  IconContainer,
  placeholder = 'Search',
}) => {
  const handleClear = () => {
    setSearchText('');
    Keyboard.dismiss(); // Dismiss the keyboard
  };

  return (
    <View style={{...styles.container, ...style}}>
      <View
        style={{
          width: moderateScale(44),
          height: moderateScale(44),
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: moderateScale(10),
          backgroundColor: colors.theme,
        }}>
        <TouchableOpacity
          style={{...styles.IconStyle, ...IconContainer}}
          activeOpacity={0.5}
          onPress={onPress}>
          {icon ? (
            <Image
              style={{...styles.imgStyle, ...IconStyle}}
              source={icon}
              resizeMode="contain"
            />
          ) : (
            <Image
              style={styles.imgStyle}
              source={imagePath.drawerIcon}
              resizeMode="contain"
            />
          )}
          {/* <Image
          style={styles.imgStyle}
          source={imagePath.drawerIcon}
          resizeMode="contain"
        /> */}
        </TouchableOpacity>
      </View>
      <TextInputCompo
        leftIcon={imagePath.search}
        placeholder={placeholder}
        inputStyle={{...styles.inputStyle, ...inputStyle}}
        textStyle={{color: colors.black}}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        clearIcon={searchText.length > 0 ? 'X' : ''}
        onPressClear={handleClear}
      />
      {/* <TextInput
        placeholder={placeholder}
        value={searchText}
        style={{...styles.inputStyle, ...inputStyle}}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: moderateVerticalScale(20),
    // paddingHorizontal: moderateScale(8),
    backgroundColor: colors.theme,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  IconStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: moderateScale(12),
  },
  imgStyle: {
    width: moderateScale(14),
    height: moderateScale(14),
    // borderRadius: moderateScale(14 / 2),
  },
  inputStyle: {
    backgroundColor: colors.searchbarBg,
    borderWidth: 1,
    borderColor: colors.searchbarBorder,
    borderRadius: moderateScale(30),
    flex: 1,
    // paddingVertical: moderateVerticalScale(8),
    paddingHorizontal: moderateScale(14),
  },
});

export default HeaderWithSearch;
