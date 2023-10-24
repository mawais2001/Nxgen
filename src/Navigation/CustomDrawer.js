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
} from 'react-native';
import navigationStrings from './navigationStrings';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import DrawerItemsList from '../Components/Navigation/DrawerItemsList';

function CustomDrawer(props) {
  const {navigation} = props;
  const [showDetail, setShowDetail] = useState(false);
  const handleShowContactDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <DrawerContentScrollView
      {...props}
      style={{backgroundColor: colors.drawerNaviBgColor, width: '100%'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.ProfileDetailContiner}>
        <Image
          source={imagePath.avatar}
          style={styles.profileImageStyle}
          resizeMode="contain"
        />
        <View style={{marginLeft: moderateScale(8)}}>
          <Text style={styles.profileNameStyle}>Awais Yaseen</Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={imagePath.unlock}
              style={{width: moderateScale(20), height: moderateScale(20)}}
              resizeMode="contain"
            />
            <Text style={styles.desciptionStyle}>
              Unlock all premium features
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btnStyle} activeOpacity={0.7}>
        <Text style={styles.btnTextStyle}>Try 7 days free</Text>
      </TouchableOpacity>
      <View
        style={{
          height: moderateVerticalScale(1.4),
          backgroundColor: colors.borderColor,
          marginTop: moderateVerticalScale(6),
        }}
      />
      <View
        style={{
          paddingHorizontal: moderateScale(16),
          marginTop: moderateVerticalScale(16),
        }}>
        <DrawerItemsList
          label="How to use the App"
          icon={imagePath.info}
          onPress={() => navigation.navigate(navigationStrings.HowToUseApp)}
        />
        <DrawerItemsList label="Signals Results" icon={imagePath.antenna} />
        <DrawerItemsList label="Crypto News" icon={imagePath.news} />
        <DrawerItemsList label="Crypto Categories" icon={imagePath.category} />
        <DrawerItemsList
          label="Compound Calculator"
          icon={imagePath.calculator}
        />
        <DrawerItemsList label="IDO" icon={imagePath.shuttle} />
        <DrawerItemsList label="Language" icon={imagePath.language} />
        <DrawerItemsList
          label="Setting"
          icon={imagePath.setting}
          onPress={() => navigation.navigate(navigationStrings.Setting)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <DrawerItemsList
            label="Contact Us"
            icon={imagePath.contact}
            style={{marginBottom: moderateVerticalScale(10)}}
          />
          <TouchableOpacity
            style={{
              paddingHorizontal: moderateScale(10),
              paddingVertical: moderateVerticalScale(8),
            }}
            onPress={handleShowContactDetail}
            activeOpacity={0.5}>
            <Image
              source={showDetail ? imagePath.up : imagePath.down}
              style={{
                width: moderateScale(14),
                height: moderateScale(14),
                tintColor: colors.yellow,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {showDetail ? (
          <View>
            <View style={{paddingHorizontal: moderateScale(40)}}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                activeOpacity={0.6}>
                <Image
                  source={imagePath.telegram}
                  style={styles.contactIconStyle}
                />
                <Text style={styles.contactTextStyle}>Telegram</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingHorizontal: moderateScale(40),
                marginTop: moderateVerticalScale(8),
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                activeOpacity={0.6}>
                <Image
                  source={imagePath.twitter}
                  style={styles.contactIconStyle}
                />
                <Text style={styles.contactTextStyle}>Twitter</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <View style={styles.copyRightContainer}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Image
              source={imagePath.drawerLogo}
              style={styles.bottomLogoStyle}
              resizeMode="contain"
            />
            <Text style={styles.copyRightStyle}>
              All rights reserved copyright 2021
            </Text>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  ProfileDetailContiner: {
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateVerticalScale(22),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageStyle: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(48 / 2),
  },
  profileNameStyle: {
    fontSize: scale(16),
    fontWeight: '400',
    color: colors.black,
  },
  desciptionStyle: {
    fontSize: scale(12),
    fontWeight: '400',
    color: colors.gray,
    width: '80%',
    flexWrap: 'wrap',
    textAlign: 'left',
    marginLeft: moderateScale(2),
  },
  btnStyle: {
    backgroundColor: colors.yellow,
    paddingVertical: moderateVerticalScale(10),
    alignItems: 'center',
    borderRadius: moderateScale(4),
    marginVertical: moderateVerticalScale(10),
  },
  btnTextStyle: {
    fontSize: scale(16),
    fontWeight: '500',
    color: colors.black,
  },
  contactIconStyle: {
    width: moderateScale(16),
    height: moderateScale(16),
  },
  contactTextStyle: {
    fontSize: scale(12),
    fontWeight: '500',
    color: colors.drawerTextColor,
    marginLeft: moderateScale(8),
  },
  bottomLogoStyle: {
    width: moderateScale(18),
    height: moderateScale(18),
    tintColor: colors.drawerTextColor,
  },
  copyRightStyle: {
    fontSize: scale(12),
    fontWeight: '500',
    color: colors.drawerTextColor,
    marginLeft: moderateScale(8),
    flexWrap: 'wrap',
  },
  copyRightContainer: {
    marginTop: moderateVerticalScale(16),
    marginBottom: moderateVerticalScale(24),
  },
});

export default CustomDrawer;
