import {
  React,
  View,
  StyleSheet,
  FlatList,
  Text,
  scale,
  moderateScale,
  moderateVerticalScale,
  Image,
  TouchableOpacity,
  colors,
} from '../../common/CommonImports';

const TrackedCoins = ({trackData, selected}) => {
  return (
    <View style={styles.trackedContainer}>
      <View style={styles.trackedHeaderStyle}>
        <Text style={styles.headingText}>
          {selected} Coins {`(${trackData.length})`}
        </Text>
      </View>
      <FlatList
        data={trackData}
        renderItem={({item}) => {
          return (
            <View style={styles.cardContainerStyle}>
              <View style={styles.cardContentContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={item.img}
                    style={{
                      width: moderateScale(40),
                      height: moderateScale(40),
                    }}
                  />
                  <View style={{marginLeft: moderateScale(14)}}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.black,
                        fontWeight: '500',
                      }}>
                      {item.coinName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color:
                          item.risk === 'Mid Risk'
                            ? colors.yellow
                            : item.risk === 'Low Risk'
                            ? colors.lightGreen
                            : colors.lightRed,
                        fontWeight: '500',
                      }}>
                      {item.risk}
                    </Text>
                  </View>
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: scale(12),
                      color: colors.lightGreen,
                      alignSelf: 'flex-end',
                    }}>
                    3.75%
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: moderateVerticalScale(4),
                    }}>
                    <TouchableOpacity
                      style={[
                        styles.cardButtonStyle,
                        {marginRight: moderateScale(6)},
                      ]}>
                      <Text style={{color: colors.black, fontWeight: '500'}}>
                        Details
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardButtonStyle}>
                      <Text style={{color: colors.black, fontWeight: '500'}}>
                        Untrack
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trackedContainer: {
    flex: 1,
  },
  trackedHeaderStyle: {
    paddingVertical: moderateVerticalScale(18),
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateVerticalScale(22),
  },
  headingText: {
    fontSize: scale(18),
    color: colors.black,
    fontWeight: '500',
  },
  cardContainerStyle: {
    paddingVertical: moderateVerticalScale(16),
    paddingHorizontal: moderateScale(20),
    marginHorizontal: moderateScale(20),
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(6),
    marginBottom: moderateVerticalScale(14),
  },
  cardContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardButtonStyle: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateVerticalScale(2),
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: moderateScale(4),
  },
});

export default TrackedCoins;
