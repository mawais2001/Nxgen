import ButtonCompo from '../../Components/ButtonCompo';
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

function SignUp(props) {
  const [isShow, setIsShow] = useState(true);

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
          <Text style={styles.headingStyle}>Sign Up</Text>
        </View>
        <TextInputLabel
          placeholder={'Full Name'}
          label="Full Name"
          leftIcon={imagePath.user}
        />
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
        <TextInputLabel
          placeholder={'Confirm Password'}
          label="Confirm Password"
          leftIcon={imagePath.lock}
          rightIcon={isShow ? imagePath.showEye : imagePath.hideEye}
          onPressRight={() => setIsShow(!isShow)}
          secureTextEntry={isShow ? true : false}
        />
        <View
          style={{
            alignItems: 'center',
            marginTop: moderateVerticalScale(20),
          }}>
          <ButtonCompo title="Sign Up" />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: moderateVerticalScale(16),
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: colors.black, fontSize: scale(12)}}>
            Aleady a User?
          </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text
              style={{
                color: colors.yellow,
                fontSize: scale(16),
                fontWeight: '500',
              }}>
              {` Sign In`}
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
    marginVertical: moderateVerticalScale(34),
    paddingHorizontal: moderateScale(24),
  },
  headingStyle: {
    fontSize: scale(24),
    // fontFamily: fontFamily.regular,
    fontWeight: '500',
    color: colors.black,
  },
  forgotPassStyle: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '500',
    // fontFamily: fontFamily.regular,
  },
});

export default SignUp;
