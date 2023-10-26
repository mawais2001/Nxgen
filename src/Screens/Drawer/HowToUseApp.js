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
  useState,
  TextInput,
} from '../../common/CommonImports';
import {useNavigation} from '@react-navigation/native';
import * as AllCompo from '../../Components/index';
import Video from 'react-native-video';
function HowToUseApp(props) {
  const navigation = useNavigation();
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <AllCompo.HeaderWIthLabel
        label="Disclaimer | NXGen Signals"
        containerStyle={{
          paddingHorizontal: moderateScale(18),
          paddingVertical: moderateVerticalScale(12),
        }}
        labelStyle={{fontSize: scale(12)}}
        style={{
          width: moderateScale(20),
          height: moderateScale(20),
          borderRadius: moderateScale(10),
        }}
        iconSize={12}
      />
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7);',
          alignItems: 'center',
          marginVertical: moderateVerticalScale(6),
        }}>
        <Video
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          }}
          style={{width: '100%', height: moderateVerticalScale(200)}}
          controls={true}
        />
      </View>
      <View style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.mainConatianer}>
          <Text style={styles.headingStyle}>
            Information About nxgen Signals
          </Text>
          <TouchableOpacity
            style={styles.useAppConatiner}
            onPress={handleShowDetail}
            activeOpacity={0.8}>
            <View
              style={{
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateVerticalScale(16),
              }}>
              <Text style={[styles.headingStyle, {fontSize: scale(12)}]}>
                How to use the App
              </Text>
            </View>

            {showDetail ? (
              <View style={{marginBottom: moderateVerticalScale(16)}}>
                <View
                  style={[
                    styles.showDetailConatiner,
                    {borderTopWidth: 0.8, borderTopColor: colors.gray},
                  ]}>
                  <View>
                    <Text style={styles.detailHeadingStyle}>Signals:</Text>
                    <Text style={styles.detailDescriptionStyle}>
                      You can copy any signal target. Track your favourite coins
                      and get notifications.
                    </Text>
                  </View>
                </View>

                <View style={styles.showDetailConatiner}>
                  <View>
                    <Text style={styles.detailHeadingStyle}>InSights:</Text>
                    <Text style={styles.detailDescriptionStyle}>
                      Get the latest crypto news updated every hour. Stay on
                      track with the latest news on your assests.
                    </Text>
                  </View>
                </View>

                <View style={styles.showDetailConatiner}>
                  <View>
                    <Text style={styles.detailHeadingStyle}>
                      Market status:
                    </Text>
                    <Text style={styles.detailDescriptionStyle}>
                      We will show if we are Bullish, Bearish or Neutral.
                    </Text>
                  </View>
                </View>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: moderateScale(20),
          }}>
          <Text style={styles.detailDescriptionStyle}>
            Your can submit any questions or feekback to us.
          </Text>
          <Text
            style={[
              styles.detailDescriptionStyle,
              {marginTop: moderateVerticalScale(6)},
            ]}>
            Many features will be added in future, keep an eye on our upcoming
            updates in the AppStore & Google Play store.
          </Text>
          <View style={{marginTop: moderateVerticalScale(22)}}>
            <Text
              style={[
                styles.headingStyle,
                {marginBottom: moderateVerticalScale(4), fontSize: scale(12)},
              ]}>
              Noted:
            </Text>
            <Text style={styles.detailDescriptionStyle}>
              How will not make any assurance about your loss your capital.
              Cryptocurrency is a risky investment and you should take your own
              risk.
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: moderateScale(20),
            marginTop: moderateVerticalScale(24),
            marginBottom: moderateVerticalScale(22),
            alignItems: 'center',
          }}>
          <TextInput placeholder="Ask Question" style={styles.inputStyle} />
          <AllCompo.ButtonCompo
            title="SUBMIT YOUR QUESTION"
            textStyle={{
              color: colors.black,
              fontWeight: '500',
              fontSize: scale(12),
            }}
            style={{width: '100%', marginTop: moderateVerticalScale(20)}}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  mainConatianer: {
    paddingHorizontal: moderateScale(20),
    marginVertical: moderateVerticalScale(12),
  },
  headingStyle: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '500',
  },
  useAppConatiner: {
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(6),

    marginTop: moderateVerticalScale(14),
  },
  showDetailConatiner: {
    paddingTop: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(16),
  },
  detailHeadingStyle: {
    fontSize: scale(12),
    color: colors.black,
    fontWeight: '500',
  },
  detailDescriptionStyle: {
    fontSize: scale(10),
    color: colors.black,
    fontWeight: '400',
    marginTop: moderateVerticalScale(2),
  },
  otherdetailTextStyle: {
    fontSize: scale(13),
    color: colors.gray,
    fontWeight: '700',
  },
  inputStyle: {
    width: '100%', // Set the desired width
    height: moderateVerticalScale(140), // Set the desired height
    fontSize: scale(12), // Set the desired font size
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(16),
  },
});

export default HowToUseApp;
