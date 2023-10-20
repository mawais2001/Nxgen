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
  FlatList,
} from '../../common/CommonImports';
import ButtonCompo from '../ButtonCompo';
import Articles from './Articles';
import FeaturedCourses from './FeaturedCourses';

const Academy = props => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={{
          marginTop: moderateVerticalScale(16),
          paddingHorizontal: moderateScale(22),
        }}>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text style={styles.btnTextStyle}>Learn All about</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: moderateScale(22),
          marginTop: moderateVerticalScale(12),
        }}>
        <Text style={styles.headingStyle}>Block Chain & Crypto</Text>
        <Text style={styles.descriptionStyle}>
          {`Your one-stop guide to all things crypto. Whethre you’re a rookie trying to understand mining or a veteran looking to develop a trading strategy, we’ve got you covered.`}
        </Text>
        <ButtonCompo
          title="Start Here"
          textStyle={{
            color: colors.black,
            fontWeight: '700',
            fontSize: scale(14),
          }}
          style={{width: '40%', marginTop: moderateVerticalScale(4)}}
        />
      </View>
      <FeaturedCourses />
      <Articles {...props} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  btnTextStyle: {
    fontSize: scale(12),
    fontWeight: '700',
    color: colors.black,
    textTransform: 'uppercase',
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: colors.yellow,
    width: '50%',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(20),
  },
  headingStyle: {
    fontSize: scale(40),
    fontWeight: '700',
    color: colors.black,
  },
  descriptionStyle: {
    fontSize: scale(14),
    fontWeight: '500',
    color: colors.gray,
    textAlign: 'justify',
    marginVertical: moderateVerticalScale(12),
  },
});

export default Academy;
