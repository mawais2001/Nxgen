import {
  React,
  View,
  useState,
  StyleSheet,
  Text,
  scale,
  moderateScale,
  moderateVerticalScale,
  TouchableOpacity,
  StatusBar,
  colors,
  ScrollView,
  ImageBackground,
  FlatList,
  imagePath,
  Image,
} from '../../common/CommonImports';
import Octicon from 'react-native-vector-icons/Octicons';

const FeaturedCourses = props => {
  const coursesDetail = [
    {
      title: 'Build your first Blockchain using',
      img: imagePath.course1,
    },
    {
      title: 'Introduction to Crpto',
      img: imagePath.course2,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.courseImageContainer}>
          <ImageBackground
            source={{uri: item.img}}
            style={styles.courseImageStyle}>
            <View style={styles.courseImageTextContainer}>
              <View
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  paddingLeft: moderateScale(20),
                  paddingVertical: moderateVerticalScale(6),
                }}>
                <Text
                  style={{
                    fontSize: scale(20),
                    color: colors.white,
                  }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: moderateVerticalScale(8),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Octicon name="dot-fill" size={18} color={colors.lightGreen} /> */}
            <Image
              source={imagePath.dot}
              style={{
                width: moderateScale(12),
                height: moderateScale(12),
                tintColor: colors.lightGreen,
              }}
            />
            <Text style={styles.courseImageTextStyle}>Beginner</Text>
          </View>
          <Text
            style={[
              styles.courseDetailTextStyle,
              {marginHorizontal: moderateScale(10)},
            ]}>
            Sep 21, 2023
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Octicon name="clock" size={18} color={colors.lightGreen} /> */}
            <Image
              source={imagePath.clock}
              style={{
                width: moderateScale(12),
                height: moderateScale(12),
                tintColor: colors.gray,
              }}
            />
            <Text
              style={[
                styles.courseDetailTextStyle,
                {marginLeft: moderateScale(6)},
              ]}>
              8m
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: moderateScale(22),
          marginBottom: moderateVerticalScale(10),
        }}>
        <Text style={styles.headingStyle}>Featured Courses</Text>
      </View>
      <View style={{flex: 1, paddingHorizontal: moderateScale(20)}}>
        <FlatList
          data={coursesDetail}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          // showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: moderateVerticalScale(16),
  },
  headingStyle: {
    fontSize: scale(18),
    fontWeight: '700',
    color: colors.black,
  },
  courseImageStyle: {
    width: '100%',
    height: '100%',
  },
  courseImageContainer: {
    width: moderateScale(300),
    marginRight: moderateScale(12),
    height: moderateScale(170),
    borderRadius: moderateScale(18),
    overflow: 'hidden',
  },
  courseImageTextContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'flex-end',

    paddingBottom: moderateVerticalScale(20),
  },
  courseImageTextStyle: {
    color: colors.black,
    fontSize: scale(14),
    fontWeight: '500',
    marginLeft: moderateScale(6),
  },
  courseDetailTextStyle: {
    color: colors.gray,
    fontSize: scale(12),
    fontWeight: '500',
  },
});

export default FeaturedCourses;
