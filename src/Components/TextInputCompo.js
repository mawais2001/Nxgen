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
  ...props
}) {
  return (
    <View style={{...styles.inputStyle, ...inputStyle}}>
      {leftIcon ? (
        <Image style={styles.leftIconStyle} source={leftIcon} />
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
          <CloseIcon name="close" size={18} color={colors.black} />
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
});

export default TextInputCompo;
