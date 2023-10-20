import {
  React,
  View,
  StyleSheet,
  Text,
  scale,
  moderateScale,
  moderateVerticalScale,
  TouchableOpacity,
  StatusBar,
  colors,
  FlatList,
  ImageBackground,
} from '../../common/CommonImports';
import ButtonCompo from '../ButtonCompo';
import VideoCourseData from '../../dummyData/VideoCourseData';
import {useNavigation} from '@react-navigation/native';
import Octicon from 'react-native-vector-icons/Octicons';

function Videos(props) {
  const allCourses = VideoCourseData.allCourse;
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View style={{marginRight: moderateScale(12)}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.courseImageContainer}>
          <ImageBackground
            source={{uri: item.img}}
            style={styles.courseImageStyle}>
            <View style={styles.courseImageTextContainer}>
              <Text
                style={{
                  fontSize: scale(12),
                  color: colors.black,
                  backgroundColor: colors.yellow,
                  alignSelf: 'flex-end',
                  fontWeight: '500',
                  paddingHorizontal: moderateScale(6),
                  paddingVertical: moderateVerticalScale(4),
                  borderRadius: moderateScale(8),
                }}>
                {item.length}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={{
            marginTop: moderateVerticalScale(8),
            width: moderateScale(300),
            paddingHorizontal: moderateScale(10),
          }}>
          <Text style={styles.courseHeadingTextStyle}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(16),
          marginTop: moderateVerticalScale(18),
        }}>
        <FlatList
          data={allCourses}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
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
  courseImageContainer: {
    width: moderateScale(300),
    // marginRight: moderateScale(12),
    height: moderateScale(170),
    borderRadius: moderateScale(18),
    overflow: 'hidden',
  },
  courseImageTextContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(20),
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
  courseImageStyle: {
    width: '100%',
    height: '100%',
  },
  courseHeadingTextStyle: {
    color: colors.black,
    fontSize: scale(14),
    fontWeight: '400',
  },
});

export default Videos;
