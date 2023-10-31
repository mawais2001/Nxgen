import {SafeAreaView} from 'react-native';
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
  useState,
} from '../../common/CommonImports';
import SelectCoins from './other/SelectCoins';

function Social(props) {
  const [selected, setSelected] = useState(false);
  const handleSelectCoins = () => {
    setSelected(true);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {!selected ? (
          <View style={{flex: 1, justifyContent: 'space-between'}}>
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
                onPress={handleSelectCoins}
              />
            </View>
          </View>
        ) : (
          <SelectCoins setSelected={setSelected} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
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
  },
});

export default Social;
