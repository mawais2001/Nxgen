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

const HeaderCompo = ({onPress, searchText, setSearchText}) => {
  const handleClear = () => {
    setSearchText('');
    Keyboard.dismiss(); // Dismiss the keyboard
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.IconStyle}
        activeOpacity={0.5}
        onPress={onPress}>
        <Image style={styles.imgStyle} source={imagePath.drawerIcon} />
      </TouchableOpacity>

      <TextInputCompo
        leftIcon={imagePath.search}
        placeholder="Coin Search Signal"
        inputStyle={{
          backgroundColor: colors.searchbarBg,
          borderWidth: 1,
          borderColor: colors.searchbarBorder,
          borderRadius: moderateScale(30),
          flex: 1,
        }}
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
});

export default HeaderCompo;
