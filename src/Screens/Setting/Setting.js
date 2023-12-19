import {
  React,
  View,
  StyleSheet,
  Text,
  FastImage,
  imagePath,
  fontFamily,
  scale,
  moderateScale,
  moderateVerticalScale,
  Image,
  Alert,
  TouchableOpacity,
  StatusBar,
  colors,
  ScrollView,
  FlatList,
  SafeAreaView,
} from '../../common/CommonImports';
import {useNavigation} from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ListHorizont from '../../Components/Setting/ListHorizont';
import {ButtonCompo, HeaderWIthLabel} from '../../Components';
import navigationStrings from '../../Navigation/navigationStrings';
import {useTheme} from '../../themes/ThemeContext';

function Setting(props) {
  const navigation = useNavigation();
  const {theme} = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, {backgroundColor: theme.background}]}>
        <HeaderWIthLabel label="Settings" />
        <View style={styles.profileDetailCard}>
          <Image source={imagePath.path1} style={styles.backgroundImage} />
          <Image source={imagePath.path} style={styles.backgroundImage} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: moderateScale(20),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate(navigationStrings.EditProfile)
                }>
                <FastImage
                  source={imagePath.avatar}
                  style={styles.profileImageStyle}
                />
              </TouchableOpacity>
              <View style={{marginLeft: moderateScale(20)}}>
                <Text style={styles.profileTextStyle}>Awais Yaseen</Text>
                <TouchableOpacity
                  style={styles.btnStyle}
                  activeOpacity={0.5}
                  onPress={() =>
                    navigation.navigate(navigationStrings.EditProfile)
                  }>
                  <Text style={styles.profileTextStyle}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: moderateVerticalScale(2),
            backgroundColor: colors.gray,
            marginVertical: moderateVerticalScale(30),
          }}
        />
        <ListHorizont
          title="Contact Us"
          icon={imagePath.call}
          iconRight={imagePath.forward}
          onPress={() => navigation.navigate(navigationStrings.ContactUs)}
        />
        <ListHorizont
          title="Change Password"
          icon={imagePath.password}
          iconRight={imagePath.forward}
          onPress={() => navigation.navigate(navigationStrings.ChangePassword)}
        />
        <ListHorizont
          title="Privacy Policy"
          icon={imagePath.email2}
          iconRight={imagePath.forward}
          onPress={() => navigation.navigate(navigationStrings.PrivacyPolicy)}
        />
        <ListHorizont
          title="Terms of Use"
          icon={imagePath.email2}
          iconRight={imagePath.forward}
          onPress={() => navigation.navigate(navigationStrings.TermsOfUse)}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: moderateVerticalScale(20),
          }}>
          <ButtonCompo title="Logout" textStyle={{fontWeight: '700'}} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(20),
  },
  headerIconContainer: {
    width: moderateScale(24),
    height: moderateScale(24),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12),
  },
  headerTextStyle: {
    fontSize: scale(18),
    color: colors.black,
    fontWeight: '500',
    marginLeft: moderateScale(14),
  },
  profileDetailCard: {
    backgroundColor: colors.black,
    // paddingHorizontal: moderateScale(20),
    position: 'relative',
    width: '100%',
    height: '14%',
    overflow: 'hidden',
    borderRadius: moderateScale(18),
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '70%',
    resizeMode: 'stretch', // Adjust this property as needed
    bottom: 0,
  },
  profileImageStyle: {
    width: moderateScale(45),
    height: moderateScale(45),
  },
  profileTextStyle: {
    fontSize: scale(14),
    color: colors.white,
    fontWeight: '500',
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(2),
    borderRadius: moderateScale(4),
    marginTop: moderateVerticalScale(4),
    justifyContent: 'center',
  },
});

export default Setting;
