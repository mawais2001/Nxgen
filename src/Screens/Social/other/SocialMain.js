import navigationStrings from '../../../Navigation/navigationStrings.js';
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
} from '../../../common/CommonImports.js';
import SocialPostData from '../../../dummyData/SocialPostData.js';

const SocialMain = props => {
  const navigation = props.navigation;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: colors.white,
          paddingVertical: moderateVerticalScale(10),
          paddingHorizontal: moderateScale(12),
          borderRadius: moderateScale(12),
        }}
        onPress={() => Alert.alert('parent')}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            activeOpacity={0.5}
            onPress={() => Alert.alert('hello')}>
            <FastImage
              source={{uri: item.userImg}}
              style={styles.postUserImageStyle}
            />
            <View style={{marginLeft: moderateScale(12)}}>
              <Text style={styles.postUserNameTextStyle}>{item.userName}</Text>
              <Text style={styles.postTimeTextStyle}>{item.postTime}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: moderateVerticalScale(10),
          }}>
          <View
            style={{
              flex: 0.4,
              backgroundColor:
                item.purpose === 'Buy' ? colors.blue : colors.lightRed,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: moderateScale(6),
              borderBottomLeftRadius: moderateScale(6),
              paddingVertical: moderateVerticalScale(8),
            }}>
            <Text style={styles.buySellTextSyle}>{item.purpose}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              backgroundColor: colors.borderColor,
              paddingHorizontal: moderateScale(18),
              paddingVertical: moderateVerticalScale(8),
            }}>
            <FastImage
              source={item.currencyIcon}
              style={styles.postCurrencyIconStyle}
              resizeMode="contain"
            />
            <Text style={styles.currencyDetailTextStyle}>
              {item.currencyName}
            </Text>
            <Text
              style={[
                styles.currencyDetailTextStyle,
                {
                  marginHorizontal: moderateScale(6),
                  fontSize: scale(11),
                  fontWeight: '500',
                },
              ]}>
              at
            </Text>
            <Text style={styles.currencyDetailTextStyle}>
              {item.currencyQuantity}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
            }}>
            <TouchableOpacity
              style={{padding: moderateScale(8)}}
              activeOpacity={0.5}
              onPress={() => Alert.alert('Like')}>
              <Image source={imagePath.heart} style={styles.heartIconStyle} />
            </TouchableOpacity>
            <Text
              style={[
                styles.likeTextStyle,
                {
                  marginHorizontal: 6,
                },
              ]}>
              0
            </Text>
            <Text style={styles.likeTextStyle}>Likes</Text>
          </View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', flex: 1}}
            onPress={() => Alert.alert('comment')}>
            <Image source={imagePath.comment} style={styles.heartIconStyle} />
            <Text
              style={[
                styles.currencyDetailTextStyle,
                {
                  marginLeft: moderateScale(6),
                },
              ]}>
              Comment
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', flex: 1}}
            onPress={() => Alert.alert('SHARE')}>
            <Image source={imagePath.comment} style={styles.heartIconStyle} />
            <Text
              style={[
                styles.currencyDetailTextStyle,
                {
                  marginLeft: moderateScale(6),
                },
              ]}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imagePath.loginBackground}
        style={{
          height: moderateVerticalScale(82),
          justifyContent: 'center',
          paddingHorizontal: moderateScale(14),
        }}>
        <View style={styles.headerConatainer}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.headerIconStyle}
              activeOpacity={0.5}
              onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.headerimgStyle}
                source={imagePath.drawerIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <TouchableOpacity
              style={styles.commoniconContainer}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate(navigationStrings.Notification)
              }>
              <Image
                style={[styles.headerimgStyle, {tintColor: colors.theme}]}
                source={imagePath.notification}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.commoniconContainer,
                {marginHorizontal: moderateScale(12)},
              ]}
              activeOpacity={0.5}
              onPress={() => navigation.navigate(navigationStrings.Message)}>
              <Image
                style={[styles.headerimgStyle, {tintColor: colors.theme}]}
                source={imagePath.comment}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{}}
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate(navigationStrings.SocialProfile)
              }>
              <Image
                style={{
                  width: moderateScale(34),
                  height: moderateScale(34),
                }}
                source={imagePath.avatar}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.mainContainer}>
        <View style={styles.addPostBtnContainer}>
          <TouchableOpacity
            style={styles.addPostBtnContainer2}
            activeOpacity={0.5}
            onPress={() => Alert.alert('Add Post')}>
            <Image source={imagePath.plus} style={styles.addPostIconStyle} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={SocialPostData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            <View style={{height: moderateVerticalScale(14)}} />
          }
        />
      </View>
    </View>
  );
};

export default SocialMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.borderColor,
    borderTopLeftRadius: moderateScale(26),
    borderTopRightRadius: moderateScale(26),
    marginTop: moderateVerticalScale(-26),
    paddingHorizontal: moderateScale(14),
    paddingTop: moderateVerticalScale(20),
  },
  headerConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(26),
  },
  headerIconStyle: {
    width: moderateScale(34),
    height: moderateScale(34),
    borderRadius: moderateScale(34 / 2),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerimgStyle: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  commoniconContainer: {
    width: moderateScale(34),
    height: moderateScale(34),
    borderRadius: moderateScale(12),
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postUserImageStyle: {
    width: moderateScale(42),
    height: moderateScale(42),
    borderRadius: moderateScale(42 / 2),
  },
  postCurrencyIconStyle: {
    width: moderateScale(26),
    height: moderateScale(26),
    borderRadius: moderateScale(26 / 2),
    marginRight: moderateScale(12),
  },
  buySellTextSyle: {
    fontSize: scale(12),
    fontWeight: '700',
    color: colors.theme,
  },
  postUserNameTextStyle: {
    fontSize: scale(12),
    fontWeight: '500',
    color: colors.black,
  },
  postTimeTextStyle: {
    fontSize: scale(10),
    fontWeight: '600',
    color: colors.gray,
    marginTop: moderateVerticalScale(2),
  },
  currencyDetailTextStyle: {
    fontSize: scale(12),
    fontWeight: '800',
    color: colors.gray,
  },
  heartIconStyle: {
    width: moderateScale(22),
    height: moderateScale(22),
    tintColor: colors.gray,
  },
  likeTextStyle: {
    fontSize: scale(12),
    fontWeight: '800',
    color: colors.gray,
  },
  addPostBtnContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(48 / 2),
    backgroundColor: '#F6EDC3',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 26,
    right: 24,
    zIndex: 1,
  },
  addPostBtnContainer2: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(40 / 2),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPostIconStyle: {
    width: moderateScale(14),
    height: moderateScale(14),
  },
});
