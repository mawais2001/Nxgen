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
} from '../../common/CommonImports';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ProfileCardsData from '../../dummyData/ProfileCardsData';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../Navigation/navigationStrings';

function Profile(props) {
  const cardData = ProfileCardsData.allCards;
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.cardContainer} activeOpacity={0.6}>
        <FastImage source={item.img} style={styles.cardImageStyle} />
        <View
          style={{
            flex: 1,
            marginLeft: moderateScale(12),
            // backgroundColor: 'red',
          }}>
          <Text style={styles.cardHeadingStyle}>{item.title} </Text>
          <Text numberOfLines={2} style={styles.cardSubHeadingStyle}>
            {item.descirption}
          </Text>
        </View>
        <View style={{paddingLeft: moderateScale(8)}}>
          <Text style={styles.cardTimeStyle}> {item.time} </Text>
          <Text style={styles.cardRiskStyle}>
            Entry {' - '}
            <Text
              style={[
                styles.cardRiskStyle,
                {
                  color:
                    item.risk === 'Low Risk'
                      ? colors.lightGreen
                      : colors.yellow,
                },
              ]}>
              {' ' + item.risk}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <View style={styles.profileHeaderStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FastImage
            source={imagePath.avatar}
            style={styles.profileImageStyle}
          />
          <View style={{marginLeft: moderateScale(18)}}>
            <Text style={styles.profileNameStyle}>Awais Yaseen</Text>
            <Text style={styles.profileSubTitleStyle}>
              Unlock all Permium Features
            </Text>
            <TouchableOpacity
              style={{
                marginTop: moderateVerticalScale(4),
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  backgroundColor: colors.yellow,
                  paddingHorizontal: moderateScale(12),
                  paddingVertical: moderateVerticalScale(2),
                  borderRadius: moderateScale(8),
                  color: colors.white,
                  fontWeight: '400',
                }}>
                Try 7 Days Free
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.settingIconContainer}
          onPress={() => navigation.navigate(navigationStrings.Setting)}
          activeOpacity={0.5}>
          <Ionicon name="settings-outline" size={26} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: moderateVerticalScale(6),
        }}>
        <Text style={styles.cardTitleStyle}>Info</Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(20),
          marginVertical: moderateVerticalScale(20),
        }}>
        <FlatList
          data={cardData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  profileImageStyle: {
    width: moderateScale(44),
    height: moderateScale(44),
  },
  profileHeaderStyle: {
    paddingVertical: moderateVerticalScale(22),
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingIconContainer: {
    paddingVertical: moderateScale(12),
    paddingLeft: moderateScale(12),
  },
  profileNameStyle: {
    fontSize: scale(14),
    fontWeight: '400',
    color: colors.black,
  },
  profileSubTitleStyle: {
    fontSize: scale(12),
    fontWeight: '400',
    color: colors.gray,
    // marginVertical: moderateVerticalScale(2),
  },
  cardTitleStyle: {
    fontSize: scale(16),
    color: colors.black,
    fontWeight: '500',
    paddingHorizontal: moderateScale(14),
  },
  cardImageStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateVerticalScale(8),
    borderWidth: 1,
    borderColor: colors.gray,
    marginBottom: moderateVerticalScale(16),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(14),
  },
  cardHeadingStyle: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '500',
  },
  cardSubHeadingStyle: {
    fontSize: scale(12),
    color: colors.gray,
    fontWeight: 'bold',
    marginTop: moderateVerticalScale(2),
  },
  cardTimeStyle: {
    fontSize: scale(12),
    color: colors.gray,
    fontWeight: '700',
  },
  cardRiskStyle: {
    fontSize: scale(12),
    color: colors.black,
    fontWeight: '500',
  },
});

export default Profile;
