import {ButtonCompo} from '../../Components';
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
  ImageBackground,
} from '../../common/CommonImports';

function Social(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <View />
      <View />
      <View />
      <View style={{alignItems: 'center'}}>
        <FastImage
          source={imagePath.illustration}
          style={styles.ImageStyle}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.textStyle}>
          {`Connect with Global
          Cyrpto User`}
        </Text>
      </View>
      <View />
      <View
        style={{
          alignItems: 'center',
          marginBottom: moderateVerticalScale(20),
        }}>
        <ButtonCompo
          title="Connect Now"
          textStyle={{
            color: colors.black,
            fontWeight: '600',
            fontSize: scale(13),
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    justifyContent: 'space-between',
    paddingBottom: moderateVerticalScale(20),
  },
  ImageStyle: {
    width: moderateScale(280),
    height: moderateScale(130),
  },
  textStyle: {
    fontSize: scale(20),
    fontWeight: '500',
    color: colors.black,
    marginTop: moderateVerticalScale(20),
    // textAlign: 'center',
  },
});

export default Social;
