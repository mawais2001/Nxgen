import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Alert,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../../../styles/colors';
import imagePath from '../../../constants/imagePath';
import navigationStrings from '../../../Navigation/navigationStrings';

export default function CustomDrawerSocail(props) {
  const {navigation} = props;

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: colors.theme,
        width: '100%',
      }}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(16),
        }}>
        <TouchableOpacity
          style={styles.headerBackIconContainer}
          activeOpacity={0.5}
          onPress={() => navigation.closeDrawer()}>
          <Image
            source={imagePath.back}
            style={styles.headerBackImageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.commoniconContainer}
            activeOpacity={0.5}>
            <Image
              style={[styles.headerimgStyle, {tintColor: colors.theme}]}
              source={imagePath.search}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: moderateScale(4)}} />
          <TouchableOpacity
            style={styles.commoniconContainer}
            activeOpacity={0.5}
            onPress={() => navigation.navigate(navigationStrings.Message)}>
            <Image
              style={[styles.headerimgStyle, {tintColor: colors.theme}]}
              source={imagePath.comment}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          marginVertical: moderateVerticalScale(20),
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

        <Text style={styles.userProfileNameStyle}>Awais Yaseen</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(16),
          marginBottom: moderateVerticalScale(10),
        }}>
        <TouchableOpacity style={styles.mainContainer} activeOpacity={0.5}>
          <Image source={imagePath.home} style={styles.iconStyle} />
          <Text style={styles.textStyle}>Home</Text>
          <Text style={styles.desctextStyle}>See your recent activity</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal: moderateScale(6)}} />
        <TouchableOpacity style={styles.mainContainer} activeOpacity={0.5}>
          <Image source={imagePath.post} style={styles.iconStyle} />
          <Text style={styles.textStyle}>Post</Text>
          <Text style={styles.desctextStyle}>Post your experience</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(16),
          marginBottom: moderateVerticalScale(10),
        }}>
        <TouchableOpacity style={styles.mainContainer} activeOpacity={0.5}>
          <Image source={imagePath.friends} style={styles.iconStyle} />
          <Text style={styles.textStyle}>Find Friends</Text>
          <Text style={styles.desctextStyle}>Find your Mentor/Friend </Text>
        </TouchableOpacity>
        <View style={{marginHorizontal: moderateScale(6)}} />
        <TouchableOpacity style={styles.mainContainer} activeOpacity={0.5}>
          <Image source={imagePath.post} style={styles.iconStyle} />
          <Text style={styles.textStyle}>Explore</Text>
          <Text style={styles.desctextStyle}>See Market Trending</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(16),
          marginBottom: moderateVerticalScale(10),
        }}>
        <TouchableOpacity style={styles.mainContainer} activeOpacity={0.5}>
          <Image source={imagePath.comment} style={styles.iconStyle} />
          <Text style={styles.textStyle}>Message</Text>
          <Text style={styles.desctextStyle}>See your messages </Text>
        </TouchableOpacity>
        <View style={{marginHorizontal: moderateScale(6)}} />
        <TouchableOpacity style={styles.mainContainer} activeOpacity={0.5}>
          <Image source={imagePath.notification} style={styles.iconStyle} />
          <Text style={styles.textStyle}>Notifications</Text>
          <Text style={styles.desctextStyle}>Check who notifi you</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  headerBackIconContainer: {
    width: moderateScale(26),
    height: moderateScale(26),
    borderRadius: moderateScale(26 / 2),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBackImageStyle: {
    width: moderateScale(12),
    height: moderateScale(12),
  },
  commoniconContainer: {
    width: moderateScale(34),
    height: moderateScale(34),
    borderRadius: moderateScale(12),
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerimgStyle: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  userProfileNameStyle: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '700',
    marginTop: moderateVerticalScale(8),
  },
  iconStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  textStyle: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '700',
    marginVertical: moderateVerticalScale(8),
  },
  desctextStyle: {
    fontSize: scale(12),
    color: colors.gray,
    fontWeight: '500',
  },
  mainContainer: {
    backgroundColor: colors.borderColor,
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(14),
    borderRadius: moderateScale(8),
    flex: 1,
  },
});
