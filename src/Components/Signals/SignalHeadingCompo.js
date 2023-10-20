import {
  React,
  View,
  useState,
  StyleSheet,
  FlatList,
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
} from '../../common/CommonImports';

const SignalHeadingCompo = ({title, itemLength}) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>{`${title} (${itemLength})`}</Text>
      <View>
        <FastImage
          source={imagePath.frame}
          style={styles.headingImgeStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.headingSubText}>Bearish</Text>
          <Text style={styles.headingSubText}>Bull</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(4),
  },
  headingText: {
    fontSize: scale(20),
    color: colors.black,
    fontWeight: '500',
  },
  headingImgeStyle: {
    height: moderateScale(64),
    width: moderateScale(154),
  },
  headingSubText: {
    fontSize: scale(10),
    color: colors.black,
    fontWeight: '400',
  },
});

export default SignalHeadingCompo;
