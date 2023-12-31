import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import colors from '../styles/colors';
import TextInputCompo from './TextInputCompo';

const HeaderCompo = ({
  onPress,
  searchText,
  setSearchText,
  icon,
  IconStyle,
  style,
  inputStyle,
  IconContainer,
}) => {
  const handleClear = () => {
    setSearchText('');
    Keyboard.dismiss(); // Dismiss the keyboard
  };

  return (
    <View style={{...styles.container, ...style}}>
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

      <TextInputCompo
        leftIcon={imagePath.search}
        placeholder="Coin Search Signal"
        inputStyle={{...styles.inputStyle, ...inputStyle}}
        textStyle={{color: colors.black}}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        clearIcon={searchText.length > 0 ? 'X' : ''}
        onPressClear={handleClear}
      />
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
    // alignItems: 'center',
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
  inputStyle: {
    backgroundColor: colors.searchbarBg,
    borderWidth: 1,
    borderColor: colors.searchbarBorder,
    borderRadius: moderateScale(30),
    flex: 1,
  },
});

export default HeaderCompo;
