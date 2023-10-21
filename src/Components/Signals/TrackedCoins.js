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
  Alert,
  useState,
  FastImage,
  imagePath,
} from '../../common/CommonImports';

const TrackedCoins = ({trackData, selected}) => {
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [fullDeatil, setFullDetail] = useState([]);
  const HandleDetail = () => {
    const [showDetail, setShowDetail] = useState(true);

    const handleHideDetail = () => {
      setShowDetail(false);
      setClickedCardIndex(null);
    };
    return showDetail ? (
      <View style={{marginVertical: moderateVerticalScale(8)}}>
        <TouchableOpacity
          style={styles.detailContainer}
          activeOpacity={0.7}
          onPress={handleHideDetail}>
          <Text style={styles.detailHeading}>0 Targets Achieved</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.detailGreenTextStyle}>0.008</Text>
            <FastImage
              source={imagePath.upperArrow}
              style={{
                width: moderateScale(14),
                height: moderateScale(14),
                marginHorizontal: moderateScale(10),
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <FastImage
              source={imagePath.up}
              style={{
                width: moderateScale(12),
                height: moderateScale(12),
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: moderateVerticalScale(12),
          }}>
          <Text
            style={[
              styles.detailHeading,
              {
                fontWeight: '900',
              },
            ]}>
            Price: 0.22
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              source={imagePath.polygon}
              style={{
                width: moderateScale(14),
                height: moderateScale(14),
                marginHorizontal: moderateScale(10),
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text
              style={[
                styles.detailGreenTextStyle,
                {
                  fontSize: scale(12),
                },
              ]}>
              Entry: 0.214
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              source={imagePath.polygonDown}
              style={{
                width: moderateScale(14),
                height: moderateScale(14),
                marginHorizontal: moderateScale(10),
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text
              style={[
                styles.detailGreenTextStyle,
                {
                  fontSize: scale(12),
                },
              ]}>
              Stop: 0.175
            </Text>
          </View>
        </View>
        <View style={{marginVertical: moderateVerticalScale(8)}} />
        <View style={styles.detailTextListContainer}>
          <Text
            style={[
              styles.detailHeading,
              {
                fontWeight: '700',
              },
            ]}>
            Target 1
          </Text>
          <TouchableOpacity style={styles.deatilCopyBtnStyle}>
            <Text
              style={[
                styles.detailGreenTextStyle,
                {
                  fontSize: scale(12),
                  color: colors.yellow,
                  fontWeight: '900',
                },
              ]}>
              Copy
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.detailHeading,
              {
                fontWeight: '400',
                color: colors.black,
              },
            ]}>
            0.434
          </Text>
          <Text style={styles.detailGreenTextStyle}>102.8%</Text>
        </View>
        <View style={styles.detailTextListContainer}>
          <Text
            style={[
              styles.detailHeading,
              {
                fontWeight: '700',
              },
            ]}>
            Target 1
          </Text>
          <TouchableOpacity style={styles.deatilCopyBtnStyle}>
            <Text
              style={[
                styles.detailGreenTextStyle,
                {
                  fontSize: scale(12),
                  color: colors.yellow,
                  fontWeight: '900',
                },
              ]}>
              Copy
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.detailHeading,
              {
                fontWeight: '400',
                color: colors.black,
              },
            ]}>
            0.434
          </Text>
          <Text style={styles.detailGreenTextStyle}>102.8%</Text>
        </View>
        <View style={styles.detailTextListContainer}>
          <Text
            style={[
              styles.detailHeading,
              {
                fontWeight: '700',
              },
            ]}>
            Target 1
          </Text>
          <TouchableOpacity style={styles.deatilCopyBtnStyle}>
            <Text
              style={[
                styles.detailGreenTextStyle,
                {
                  fontSize: scale(12),
                  color: colors.yellow,
                  fontWeight: '900',
                },
              ]}>
              Copy
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.detailHeading,
              {
                fontWeight: '400',
                color: colors.black,
              },
            ]}>
            0.434
          </Text>
          <Text style={styles.detailGreenTextStyle}>102.8%</Text>
        </View>
      </View>
    ) : null;
  };
  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (clickedCardIndex === index) {
                setClickedCardIndex(null);
              } else {
                setClickedCardIndex(index);
              }
            }}>
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
              <View>
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
                    <Text
                      style={{color: colors.black, fontWeight: '500'}}
                      activeOpacity={0.5}
                      onPress={() => Alert.alert('Detail')}>
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
          </TouchableOpacity>
          {clickedCardIndex === index ? <HandleDetail /> : null}
        </View>
        {/* {showDetail ? <HandleDetail /> : null} */}
      </View>
    );
  };

  return (
    <View style={styles.trackedContainer}>
      <View style={styles.trackedHeaderStyle}>
        <Text style={styles.headingText}>
          {selected} Coins {`(${trackData.length})`}
        </Text>
      </View>
      <FlatList
        data={trackData}
        renderItem={renderItem}
        // renderItem={({item}) => {
        //   return (
        //     <View style={styles.cardContainerStyle}>
        //       <View style={styles.cardContentContainer}>
        //         <View style={{flexDirection: 'row', alignItems: 'center'}}>
        //           <Image
        //             source={item.img}
        //             style={{
        //               width: moderateScale(40),
        //               height: moderateScale(40),
        //             }}
        //           />
        //           <View style={{marginLeft: moderateScale(14)}}>
        //             <Text
        //               style={{
        //                 fontSize: 14,
        //                 color: colors.black,
        //                 fontWeight: '500',
        //               }}>
        //               {item.coinName}
        //             </Text>
        //             <Text
        //               style={{
        //                 fontSize: 12,
        //                 color:
        //                   item.risk === 'Mid Risk'
        //                     ? colors.yellow
        //                     : item.risk === 'Low Risk'
        //                     ? colors.lightGreen
        //                     : colors.lightRed,
        //                 fontWeight: '500',
        //               }}>
        //               {item.risk}
        //             </Text>
        //           </View>
        //         </View>
        //         <View style={{}}>
        //           <Text
        //             style={{
        //               fontSize: scale(12),
        //               color: colors.lightGreen,
        //               alignSelf: 'flex-end',
        //             }}>
        //             3.75%
        //           </Text>
        //           <View
        //             style={{
        //               flexDirection: 'row',
        //               alignItems: 'center',
        //               marginTop: moderateVerticalScale(4),
        //             }}>
        //             <TouchableOpacity
        //               style={[
        //                 styles.cardButtonStyle,
        //                 {marginRight: moderateScale(6)},
        //               ]}>
        //               <Text style={{color: colors.black, fontWeight: '500'}}>
        //                 Details
        //               </Text>
        //             </TouchableOpacity>
        //             <TouchableOpacity style={styles.cardButtonStyle}>
        //               <Text style={{color: colors.black, fontWeight: '500'}}>
        //                 Untrack
        //               </Text>
        //             </TouchableOpacity>
        //           </View>
        //         </View>
        //       </View>
        //     </View>
        //   );
        // }}
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
  detailContainer: {
    paddingHorizontal: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: colors.borderColor,
    paddingVertical: moderateVerticalScale(8),
    marginTop: moderateVerticalScale(8),
    borderRadius: moderateScale(2),
  },
  detailHeading: {
    fontSize: scale(13),
    color: colors.gray,
    fontWeight: '600',
  },
  detailGreenTextStyle: {
    fontSize: scale(14),
    color: colors.lightGreen,
    fontWeight: '700',
  },
  deatilCopyBtnStyle: {
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(10),
    paddingVertical: moderateVerticalScale(2),
    paddingHorizontal: moderateScale(4),
  },
  detailTextListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateVerticalScale(6),
  },
});

export default TrackedCoins;
