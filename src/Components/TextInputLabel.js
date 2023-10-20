import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {
  ScaledSheet,
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';

const TextInputLabel = ({
  placeholder,
  leftIcon,
  label,
  inputStyle = {},
  rightIcon,
  onPressRight,
  ...props
}) => {
  return (
    <View style={{...styles.inputBoxContainer, ...inputStyle}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containInput}>
        {leftIcon ? (
          <TouchableOpacity
            style={{
              width: moderateScale(32),
              height: moderateVerticalScale(32),
              borderRadius: moderateScale(32 / 2),
              backgroundColor: colors.iconBgColor,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: moderateScale(8),
            }}>
            <Image source={leftIcon} style={styles.icon} />
          </TouchableOpacity>
        ) : null}
        <TextInput style={styles.input} placeholder={placeholder} {...props} />
        {rightIcon ? (
          <TouchableOpacity onPress={onPressRight}>
            <Image source={rightIcon} style={styles.icon} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  input: {
    fontSize: scale(14),
    flex: 1,
  },
  inputBoxContainer: {
    paddingHorizontal: moderateScale(22),
    marginBottom: moderateVerticalScale(21),
  },
  label: {
    fontSize: scale(14),
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    marginBottom: moderateVerticalScale(12),
    color: colors.gray,
  },
  icon: {
    width: moderateScale(22),
    height: moderateVerticalScale(22),
    tintColor: colors.gray,
  },
  containInput: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: moderateScale(6),
    borderWidth: 1.5,
    borderColor: '#E1E1EC',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12),
  },
});

export default TextInputLabel;
