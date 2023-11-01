import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {HeaderWIthLabel} from '../../../Components';
import colors from '../../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import imagePath from '../../../constants/imagePath';

export default function SocialProfile(props) {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <HeaderWIthLabel
        label={''}
        containerStyle={{
          paddingHorizontal: moderateScale(16),
          paddingVertical: moderateVerticalScale(18),
        }}
      />
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: moderateScale(20),
            paddingBottom: moderateVerticalScale(10),
          }}>
          <View
            style={{
              width: moderateScale(132),
              height: moderateScale(132),
              borderRadius: moderateScale(14),
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 4,
              borderColor: colors.yellow,
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
              }}
              style={{
                width: moderateScale(120),
                height: moderateScale(120),
                borderRadius: moderateScale(14),
              }}
            />
          </View>
          <TouchableOpacity style={styles.editIconContainer}>
            <Image source={imagePath.edit} style={styles.editIconStyle} />
          </TouchableOpacity>
        </View>
        <Text style={styles.userProfileNameStyle}>Awais Yaseen</Text>
      </View>
      <View style={styles.followerdetailContainer}>
        <TouchableOpacity style={styles.followerDetailContentContainer}>
          <Text style={styles.followerCountText}>0</Text>
          <Text style={styles.followerText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followerDetailContentContainer}>
          <Text style={styles.followerCountText}>0</Text>
          <Text style={styles.followerText}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followerDetailContentContainer}>
          <Text style={styles.followerCountText}>0</Text>
          <Text style={styles.followerText}>Followers</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginVertical: moderateVerticalScale(14),
        }}>
        <Text style={styles.coinIntersetText}> Coin Interests</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          borderBottomWidth: 4,
          borderBottomColor: colors.borderColor,
          paddingBottom: moderateVerticalScale(12),
          paddingTop: moderateVerticalScale(6),
        }}>
        <View
          style={{alignItems: 'center', marginHorizontal: moderateScale(8)}}>
          <Image source={imagePath.Bitcoin} style={styles.interestCoinIcon} />
          <Text style={styles.interestCoinText}>BTC</Text>
        </View>
        <View
          style={{alignItems: 'center', marginHorizontal: moderateScale(8)}}>
          <Image source={imagePath.Ethereum} style={styles.interestCoinIcon} />
          <Text style={styles.interestCoinText}>ETH</Text>
        </View>
        <View
          style={{alignItems: 'center', marginHorizontal: moderateScale(8)}}>
          <Image source={imagePath.Cardano} style={styles.interestCoinIcon} />
          <Text style={styles.interestCoinText}>CAR</Text>
        </View>
        <View
          style={{alignItems: 'center', marginHorizontal: moderateScale(8)}}>
          <Image source={imagePath.XRP} style={styles.interestCoinIcon} />
          <Text style={styles.interestCoinText}>XRP</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  userProfileNameStyle: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '700',
  },
  editIconStyle: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  editIconContainer: {
    backgroundColor: colors.yellow,
    position: 'absolute',
    right: 6,
    bottom: 2,
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateVerticalScale(6),
    borderRadius: moderateScale(8),
    borderWidth: 2,
    borderColor: colors.theme,
  },
  followerdetailContainer: {
    backgroundColor: colors.white,
    paddingVertical: moderateVerticalScale(14),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateVerticalScale(16),
  },
  followerDetailContentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  followerCountText: {
    color: colors.black,
    fontSize: scale(14),
    fontWeight: '400',
  },
  followerText: {
    color: colors.black,
    fontSize: scale(14),
    fontWeight: '500',
    marginTop: moderateVerticalScale(2),
  },
  coinIntersetText: {
    color: colors.gray,
    fontSize: scale(14),
    fontWeight: '700',
  },
  interestCoinIcon: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(40 / 2),
  },
  interestCoinText: {
    color: colors.black,
    fontSize: scale(10),
    fontWeight: '500',
    marginTop: moderateVerticalScale(6),
  },
});
