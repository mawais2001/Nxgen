import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Screens from '../Screens/index';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';

const TabRoutes = props => {
  // console.log(props);
  const [selectedScreen, setSelectedScreen] = useState('Signals');

  const switchToScreen = screenName => {
    setSelectedScreen(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginBottom: 6}}>
        {selectedScreen === 'Insights' && <Screens.Insingts {...props} />}
        {selectedScreen === 'Signals' && <Screens.Signals />}
        {selectedScreen === 'Profile' && <Screens.Profile />}
        {selectedScreen === 'Library' && <Screens.Library {...props} />}
        {selectedScreen === 'Social' && <Screens.Social />}
      </View>

      <View style={styles.bottomTabContainer}>
        <TouchableOpacity
          style={[
            styles.bottomtabsStyle,
            {
              backgroundColor:
                selectedScreen === 'Insights'
                  ? colors.borderColor
                  : 'transparent',
            },
          ]}
          onPress={() => switchToScreen('Insights')}>
          <Image
            source={imagePath.barchart}
            // style={styles.bottomTabIcon}
            style={[
              styles.bottomTabIcon,
              selectedScreen === 'Insights' && {
                tintColor: colors.yellow,
                width: moderateScale(30),
                height: moderateScale(30),
              },
            ]}
          />
          <Text
            // style={styles.bottomNaivgatorText}
            style={[
              styles.bottomNaivgatorText,
              selectedScreen === 'Insights' && {color: colors.yellow},
            ]}>
            Insingts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bottomtabsStyle,
            {
              backgroundColor:
                selectedScreen === 'Signals'
                  ? colors.borderColor
                  : 'transparent',
            },
          ]}
          onPress={() => switchToScreen('Signals')}>
          <Image
            source={imagePath.storm2}
            // style={styles.bottomTabIcon}
            style={[
              styles.bottomTabIcon,
              selectedScreen === 'Signals' && {
                tintColor: colors.yellow,
                width: moderateScale(30),
                height: moderateScale(30),
              },
            ]}
          />
          <Text
            // style={styles.bottomNaivgatorText}
            style={[
              styles.bottomNaivgatorText,
              selectedScreen === 'Signals' && {color: colors.yellow},
            ]}>
            Signals
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bottomtabsStyle,
            {
              backgroundColor:
                selectedScreen === 'Library'
                  ? colors.borderColor
                  : 'transparent',
            },
          ]}
          onPress={() => switchToScreen('Library')}>
          <Image
            source={imagePath.library}
            // style={styles.bottomTabIcon}
            style={[
              styles.bottomTabIcon,
              selectedScreen === 'Library' && {
                tintColor: colors.yellow,
                width: moderateScale(30),
                height: moderateScale(30),
              },
            ]}
          />
          <Text
            // style={styles.bottomNaivgatorText}
            style={[
              styles.bottomNaivgatorText,
              selectedScreen === 'Library' && {color: colors.yellow},
            ]}>
            Library
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bottomtabsStyle,
            {
              backgroundColor:
                selectedScreen === 'Social'
                  ? colors.borderColor
                  : 'transparent',
            },
          ]}
          onPress={() => switchToScreen('Social')}>
          <Image
            source={imagePath.social}
            // style={styles.bottomTabIcon}
            style={[
              styles.bottomTabIcon,
              selectedScreen === 'Social' && {
                tintColor: colors.yellow,
                width: moderateScale(30),
                height: moderateScale(30),
              },
            ]}
            resizeMode="contain"
          />
          <Text
            // style={styles.bottomNaivgatorText}
            style={[
              styles.bottomNaivgatorText,
              selectedScreen === 'Social' && {color: colors.yellow},
            ]}>
            Social
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bottomtabsStyle,
            {
              backgroundColor:
                selectedScreen === 'Profile'
                  ? colors.borderColor
                  : 'transparent',
            },
          ]}
          onPress={() => switchToScreen('Profile')}>
          <Image
            source={imagePath.profile}
            // style={styles.bottomTabIcon}
            style={[
              styles.bottomTabIcon,
              selectedScreen === 'Profile' && {
                tintColor: colors.yellow,
                width: moderateScale(30),
                height: moderateScale(30),
              },
            ]}
          />
          <Text
            // style={styles.bottomNaivgatorText}
            style={[
              styles.bottomNaivgatorText,
              selectedScreen === 'Profile' && {color: colors.yellow},
            ]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.borderColor,
  },
  bottomTabContainer: {
    height: moderateVerticalScale(90),
    backgroundColor: 'transparent',
    // backgroundColor: colors.loginBgColor,
    justifyContent: 'flex-end',
    // borderTopWidth: 2,
    // borderTopColor: colors.borderColor,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: -30,
    // shadowColor: 'black',
    // elevation: 2,
  },
  bottomNaivgatorText: {
    fontSize: scale(10),
    color: colors.black,
    fontWeight: '500',
    marginTop: moderateScale(2),
  },
  bottomtabsStyle: {
    alignItems: 'center',
    flex: 1,
    paddingTop: moderateScale(28),
    borderRadius: 100,
  },
  bottomTabIcon: {
    width: moderateScale(28),
    height: moderateScale(28),
    tintColor: colors.black,
  },
});

export default TabRoutes;
