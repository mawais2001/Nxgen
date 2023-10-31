import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import ArticlesData from '../../dummyData/ArticlesData';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../Navigation/navigationStrings';
import imagePath from '../../constants/imagePath';

const Articles = props => {
  const myData = ArticlesData.AllArticles;
  const navigation = useNavigation();
  const renderArticles = () => {
    return myData.map((item, index) => (
      <View
        key={index}
        style={{alignItems: 'center', marginBottom: moderateVerticalScale(14)}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '90%',
            borderRadius: moderateScale(18),
            overflow: 'hidden',
          }}
          onPress={() => {
            navigation.navigate(navigationStrings.DetailArticle, {data: item});
          }}>
          <ImageBackground
            source={{uri: item.img}}
            style={styles.articleImageStyle}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: moderateVerticalScale(18),
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  paddingLeft: moderateScale(20),
                  paddingVertical: moderateVerticalScale(6),
                }}>
                <Text
                  style={{
                    fontSize: scale(16),
                    color: colors.white,
                  }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'flex-end',
            paddingHorizontal: moderateScale(28),
            marginTop: moderateVerticalScale(4),
            color: colors.gray,
            fontSize: scale(12),
            fontWeight: '500',
          }}>
          {item.time}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: moderateScale(20),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: scale(17),
            color: colors.black,
            fontWeight: '700',
          }}>
          Articles
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: moderateScale(8),
          }}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate(navigationStrings.AllArticles, {data: myData});
          }}>
          <Text
            style={{
              fontSize: scale(14),
              color: colors.black,
              fontWeight: '700',
            }}>
            See All
          </Text>
          <View
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.yellow,
              borderRadius: moderateScale(20 / 2),
              marginLeft: moderateScale(6),
            }}>
            {/* <Ionicon name="chevron-forward" size={16} color={colors.black} /> */}
            <Image
              style={{
                width: moderateScale(10),
                height: moderateScale(10),
                tintColor: colors.black,
              }}
              source={imagePath.forward}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: moderateVerticalScale(12)}}>
        {renderArticles()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    marginTop: moderateVerticalScale(20),
  },
  articleImageStyle: {
    width: '100%',
    height: 200,
  },
});

export default Articles;
