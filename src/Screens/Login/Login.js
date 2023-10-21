import {
  React,
  useState,
  useEffect,
  View,
  StyleSheet,
  Text,
  Button,
  FastImage,
  imagePath,
  fontFamily,
  scale,
  moderateScale,
  moderateVerticalScale,
  Image,
  Alert,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
  colors,
  ScrollView,
} from '../../common/CommonImports';
import TextInputLabel from '../../Components/TextInputLabel';
import ButtonWithIcon from '../../Components/ButtonWithIcon';
import ButtonCompo from '../../Components/ButtonCompo';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../Navigation/navigationStrings';
function Login(props) {
  const [isShow, setIsShow] = useState(true);
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.container}
      source={imagePath.loginBackground}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <View style={{flex: 0.3}}>
        <ImageBackground
          source={imagePath.loginBackground}
          style={styles.backgoundImageStyle}>
          <Image
            source={imagePath.loginLogo}
            style={styles.logoStyle}
            resizeMode="stretch"
          />
        </ImageBackground>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.headingContainerStyle}>
          <Text style={styles.headingStyle}>Login</Text>
        </View>
        <TextInputLabel
          placeholder={'someone@gmail.com'}
          label="Email"
          leftIcon={imagePath.email}
        />
        <TextInputLabel
          placeholder={'Password'}
          label="Password"
          leftIcon={imagePath.lock}
          rightIcon={isShow ? imagePath.showEye : imagePath.hideEye}
          onPressRight={() => setIsShow(!isShow)}
          secureTextEntry={isShow ? true : false}
        />
        <View
          style={{
            paddingHorizontal: moderateScale(22),
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.forgotIcon} source={imagePath.forgotLock} />
            <TouchableOpacity activeOpacity={0.5}>
              <Text style={styles.forgotPassStyle}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: moderateVerticalScale(20),
          }}>
          <ButtonCompo title="Login" />
          <Text
            style={{
              fontSize: scale(14),
              color: colors.gray,
              fontWeight: '500',
              marginVertical: moderateVerticalScale(16),
            }}>
            or
          </Text>
          <ButtonWithIcon
            title="Login With Google"
            leftImg={imagePath.google}
            style={{backgroundColor: colors.white}}
          />
          <View style={{marginVertical: moderateVerticalScale(6)}} />
          <ButtonWithIcon
            title="Login With Apple"
            leftImg={imagePath.apple}
            style={{backgroundColor: colors.white}}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: moderateVerticalScale(16),
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: colors.black, fontSize: scale(12)}}>
            i'm a New User.
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
            <Text
              style={{
                color: colors.yellow,
                fontSize: scale(16),
                fontWeight: '500',
              }}>
              {` Sign Up`}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgoundImageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 200,
    height: 75,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.loginBgColor,
    borderTopLeftRadius: moderateScale(34),
    borderTopRightRadius: moderateScale(34),
  },
  headingContainerStyle: {
    marginVertical: moderateVerticalScale(28),
    paddingHorizontal: moderateScale(24),
  },
  headingStyle: {
    fontSize: scale(24),
    // fontFamily: fontFamily.regular,
    fontWeight: '500',
    color: colors.black,
  },
  forgotPassStyle: {
    fontSize: scale(12),
    color: colors.black,
    fontWeight: '500',
    marginLeft: moderateScale(12),
    // fontFamily: fontFamily.regular,
  },
  forgotIcon: {
    width: moderateScale(14),
    height: moderateScale(14),
    tintColor: colors.black,
  },
});

export default Login;
