import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../styles/colors';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import fontFamily from '../styles/fontFamily';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import imagePath from '../constants/imagePath';

function TextInputCompo({
  value = '',
  onChangeText,
  placeholder = '',
  secureTextEntry = false,
  onPressSecure = () => {},
  secureText = '',
  inputStyle = {},
  textStyle = {},
  leftIcon,
  placeholderTextColor = colors.whiteColorOpacity50,
  clearIcon = '',
  onPressClear = () => {},
  leftText = '',
  leftTextStyle = '',
  leftTextOnPress = () => {},
  ...props
}) {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      {leftIcon ? (
        <Image style={styles.leftIconStyle} source={leftIcon} />
      ) : null}
      {leftText.length > 0 ? (
        <TouchableOpacity activeOpacity={0.6} onPress={leftTextOnPress}>
          <Text style={{...styles.leftTextStyle, ...leftTextStyle}}>
            {leftText}
          </Text>
        </TouchableOpacity>
      ) : null}
      <TextInput
        style={{...styles.textStyle, ...textStyle}}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onPressSecure={onPressSecure}
        {...props}
      />
      {secureText ? (
        <Text style={{color: 'white'}} onPress={onPressSecure}>
          {secureText}
        </Text>
      ) : null}
      {clearIcon.length > 0 ? (
        <TouchableOpacity
          style={{
            paddingHorizontal: moderateScale(8),
            paddingVertical: moderateVerticalScale(8),
          }}
          onPress={onPressClear}
          activeOpacity={0.4}>
          {/* <CloseIcon name="close" size={18} color={colors.black} /> */}
          <Image
            source={imagePath.close}
            style={{width: moderateScale(10), height: moderateScale(10)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: moderateScale(40),
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    alignItems: 'center',
    backgroundColor: colors.gray,
    marginBottom: moderateVerticalScale(16),
    flexDirection: 'row',
    borderRadius: moderateScale(10),
  },
  textStyle: {
    fontSize: scale(12),
    fontFamily: fontFamily.medium,
    flex: 1,
    color: colors.white,
  },
  leftIconStyle: {
    marginRight: moderateScale(8),
    width: moderateScale(14),
    height: moderateScale(14),
    tintColor: colors.black,
  },
  leftTextStyle: {
    fontSize: scale(12),
    color: colors.black,
    fontWeight: '400',
  },
});

export default TextInputCompo;
