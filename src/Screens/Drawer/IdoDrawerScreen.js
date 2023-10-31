import {
  React,
  View,
  useState,
  StyleSheet,
  scale,
  moderateScale,
  moderateVerticalScale,
  colors,
  Alert,
  StatusBar,
  Text,
  imagePath,
  FlatList,
  FastImage,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from '../../common/CommonImports';
import * as AllCompo from '../../Components/index';
import {useNavigation} from '@react-navigation/native';

function IdoDrawerScreen(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          source={imagePath.loginBackground}
          style={{flex: 1}}
          resizeMode="repeat">
          <View style={{flex: 0.2}}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={styles.headerIconConatiner}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}>
                <Image
                  source={imagePath.back}
                  style={styles.headerBackIconStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.headerText}>Past IDOs</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mianConatiner}>
            <View
              style={{
                paddingVertical: moderateVerticalScale(22),
                paddingHorizontal: moderateScale(20),
              }}>
              <Text style={styles.mainContainerheadingText}>
                NxGen Launchpad
              </Text>
            </View>
            <View
              style={{
                marginVertical: moderateVerticalScale(18),
                alignItems: 'center',
              }}>
              <Image
                source={imagePath.idobackground}
                style={styles.mianContainerImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailHeadingText}>
                Stay Tuned for more IDOs coming
              </Text>
              <Text
                style={[
                  styles.detailHeadingText,
                  {
                    fontWeight: '400',
                    marginTop: moderateVerticalScale(12),
                  },
                ]}>
                We are looking to provide you the best coming Projects.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  mianConatiner: {
    flex: 1.8,
    backgroundColor: colors.theme,
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  headerBackIconStyle: {
    width: moderateScale(14),
    height: moderateScale(14),
  },
  headerIconConatiner: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(30 / 2),
    backgroundColor: colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: scale(12),
    color: colors.theme,
    fontWeight: '500',
  },
  headerContainer: {
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  mainContainerheadingText: {
    fontSize: scale(16),
    color: colors.black,
    fontWeight: '600',
  },
  mianContainerImage: {
    width: moderateScale(300),
    height: moderateScale(300),
  },
  detailTextContainer: {
    paddingHorizontal: moderateScale(20),
  },
  detailHeadingText: {
    fontSize: scale(16),
    color: colors.black,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default IdoDrawerScreen;
