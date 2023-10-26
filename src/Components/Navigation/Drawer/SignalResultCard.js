import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import imagePath from '../../../constants/imagePath';

const SignalResultCard = props => {
  return (
    <View style={styles.resultCardContainer}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.headingStyle}>Our Performance</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(10),
          marginTop: moderateVerticalScale(18),
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={[
              styles.headingStyle,
              {color: colors.blue, fontSize: scale(14)},
            ]}>
            2
          </Text>
          <Text
            style={[
              styles.headingStyle,
              {fontSize: scale(12), marginTop: moderateVerticalScale(12)},
            ]}>
            No. of Signals
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.headingStyle,
                {color: colors.lightGreen, fontSize: scale(14)},
              ]}>
              207.54%
            </Text>
            <Image
              source={imagePath.upperArrow}
              style={styles.cardIconStyle}
              resizeMode="contain"
            />
          </View>
          <Text
            style={[
              styles.headingStyle,
              {fontSize: scale(12), marginTop: moderateVerticalScale(12)},
            ]}>
            Total Return
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.headingStyle,
                {color: colors.lightGreen, fontSize: scale(14)},
              ]}>
              207.54%
            </Text>
            <Image
              source={imagePath.upperArrow}
              style={styles.cardIconStyle}
              resizeMode="contain"
            />
          </View>
          <Text
            style={[
              styles.headingStyle,
              {fontSize: scale(12), marginTop: moderateVerticalScale(12)},
            ]}>
            Avg Trade Return
          </Text>
        </View>
      </View>
      <View
        style={{
          height: moderateVerticalScale(1),
          backgroundColor: colors.gray,
          marginVertical: moderateVerticalScale(12),
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: moderateScale(6),
          marginBottom: moderateVerticalScale(6),
        }}>
        <Image
          source={imagePath.info}
          style={{
            width: moderateScale(16),
            height: moderateScale(16),
            tintColor: colors.yellow,
          }}
        />
        <Text style={styles.warningTextStyle}>
          Our Performance result should not any indication of any future
          results.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultCardContainer: {
    paddingVertical: moderateVerticalScale(10),
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(8),
  },
  headingStyle: {
    fontSize: scale(16),
    color: colors.black,
    fontWeight: '600',
  },
  cardIconStyle: {
    width: moderateScale(14),
    height: moderateScale(14),
    marginLeft: moderateScale(6),
  },
  warningTextStyle: {
    fontSize: scale(12),
    color: colors.gray,
    fontWeight: '500',
    paddingHorizontal: moderateScale(6),
    flex: 1,
  },
});

export default SignalResultCard;
