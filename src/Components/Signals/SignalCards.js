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
  TouchableOpacity,
  StatusBar,
  colors,
} from '../../common/CommonImports';

const SignalCards = ({data}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTimestyle}> {item.time} </Text>
          <FastImage source={item.img} style={styles.cardImageStyle} />
          <Text style={styles.cardTitle}> {item.coinName} </Text>
          <Text style={styles.cardsubtitle}> {item.risk} </Text>
          <TouchableOpacity style={styles.cardButtonStyle}>
            <Text style={styles.cardButtonText}>Entry {item.entry} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.cardButtonStyle,
              {
                backgroundColor: colors.lightRed,
                marginTop: moderateVerticalScale(4),
              },
            ]}>
            <Text style={[styles.cardButtonText]}>Stop {item.stop}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(8),
    backgroundColor: colors.white,
    borderRadius: moderateScale(6),
    margin: 6,
    width: '30%',
    shadowColor: colors.gray,
    elevation: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardImageStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  cardTimestyle: {
    fontSize: scale(10),
    color: colors.gray,
    fontWeight: '500',
    marginBottom: moderateVerticalScale(4),
  },
  cardTitle: {
    fontSize: scale(12),
    color: colors.black,
    fontWeight: '500',
    marginTop: moderateVerticalScale(6),
  },
  cardsubtitle: {
    fontSize: scale(10),
    color: colors.gray,
    fontWeight: '700',
  },
  cardButtonText: {
    fontSize: scale(11),
    fontWeight: '500',
    color: colors.theme,
  },
  cardButtonStyle: {
    // paddingHorizontal: moderateScale(6),
    alignItems: 'center',
    backgroundColor: colors.lightGreen,
    borderRadius: moderateScale(2),
    width: moderateScale(80),
    paddingVertical: moderateVerticalScale(2),
    borderRadius: moderateScale(8),
  },
});

export default SignalCards;
