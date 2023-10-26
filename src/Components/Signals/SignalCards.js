import {Dimensions} from 'react-native';
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
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [lineNo, setLineNo] = useState(null);
  const [positionIndex, setPositinIndex] = useState(null);
  // console.log('clickedCardIndex: ', clickedCardIndex);
  const [layoutWidth, setLayOutWidth] = useState();
  const [layoutHeight, setLayOutHeight] = useState();
  const [deatilCompoHeight, setDeatilCompoHeight] = useState();

  const [finalHeight, setFinalHeight] = useState(null);
  // console.log('deatilCompoHeight: ', deatilCompoHeight);

  const handleDetail = index => {
    if (clickedCardIndex === index) {
      setClickedCardIndex(null);
      setShowDetail(false);
    } else {
      setClickedCardIndex(index);
      setShowDetail(true);
    }
    const lineNumber = Math.floor(index / 3);
    setLineNo(lineNumber);
    const posNo = index % 3;
    setPositinIndex(posNo);
    if (!finalHeight) {
      let fheight = parseInt(layoutHeight) + parseInt(layoutHeight);
      setFinalHeight(fheight);
    }
    // console.log('lineNumber: ', lineNumber);
  };

  const getLineNumber = index => {
    const lineNumber = Math.floor(index / 3);
    return lineNumber;
  };

  const getPositionInRow = index => {
    return index % 3; // 0 for first, 1 for second, 2 for third
  };

  const HandleDetail = index => {
    return (
      <View
        style={{
          marginVertical: moderateVerticalScale(8),
          backgroundColor: colors.theme,
        }}
        onLayout={event => {
          var {x, y, width, height} = event.nativeEvent.layout;
          setDeatilCompoHeight(height);
        }}>
        <TouchableOpacity style={styles.detailContainer} activeOpacity={0.7}>
          <Text style={styles.detailHeading}>Current Price</Text>
          <Text
            style={[
              styles.detailHeading,
              {color: colors.black, fontWeight: '700'},
            ]}>
            0.06774
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              source={imagePath.polygon}
              style={{
                width: moderateScale(12),
                height: moderateScale(12),
                marginHorizontal: moderateScale(6),
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.detailGreenTextStyle}>9.261%</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: colors.white,
            elevation: 4,
            paddingHorizontal: moderateScale(12),
          }}>
          <View style={{marginVertical: moderateVerticalScale(8)}} />
          <View style={styles.detailTextListContainer}>
            <Text
              style={[
                styles.detailHeading,
                {
                  fontWeight: '500',
                  fontSize: scale(11),
                },
              ]}>
              Target 1
            </Text>
            <TouchableOpacity style={styles.deatilCopyBtnStyle}>
              <Text
                style={[
                  styles.detailGreenTextStyle,
                  {
                    fontSize: scale(10),
                    color: colors.yellow,
                    fontWeight: '500',
                  },
                ]}>
                Copy
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.detailHeading,
                {
                  fontWeight: '500',
                  color: colors.gray,
                  fontSize: scale(11),
                },
              ]}>
              0.434
            </Text>
            <Text style={[styles.detailGreenTextStyle, {fontSize: scale(11)}]}>
              102.8%
            </Text>
          </View>
          <View style={styles.detailTextListContainer}>
            <Text
              style={[
                styles.detailHeading,
                {
                  fontWeight: '500',
                  fontSize: scale(11),
                },
              ]}>
              Target 2
            </Text>
            <TouchableOpacity style={styles.deatilCopyBtnStyle}>
              <Text
                style={[
                  styles.detailGreenTextStyle,
                  {
                    fontSize: scale(10),
                    color: colors.yellow,
                    fontWeight: '500',
                  },
                ]}>
                Copy
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.detailHeading,
                {
                  fontWeight: '500',
                  color: colors.gray,
                  fontSize: scale(11),
                },
              ]}>
              0.434
            </Text>
            <Text style={[styles.detailGreenTextStyle, {fontSize: scale(11)}]}>
              102.8%
            </Text>
          </View>
          <View style={styles.detailTextListContainer}>
            <Text
              style={[
                styles.detailHeading,
                {
                  fontWeight: '500',
                  fontSize: scale(11),
                },
              ]}>
              Target 3
            </Text>
            <TouchableOpacity style={styles.deatilCopyBtnStyle}>
              <Text
                style={[
                  styles.detailGreenTextStyle,
                  {
                    fontSize: scale(10),
                    color: colors.yellow,
                    fontWeight: '500',
                  },
                ]}>
                Copy
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.detailHeading,
                {
                  fontWeight: '500',
                  color: colors.gray,
                  fontSize: scale(11),
                },
              ]}>
              0.434
            </Text>
            <Text style={[styles.detailGreenTextStyle, {fontSize: scale(11)}]}>
              102.8%
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    const isSelected = clickedCardIndex === index;
    const lineNumber = getLineNumber(index);
    const positionrow = getPositionInRow(index);

    return (
      // <View style={styles.cardContainer}>
      //   <View style={styles.cardContent}>
      //     <Text style={styles.cardTimestyle}> {item.time} </Text>
      //     <FastImage source={item.img} style={styles.cardImageStyle} />
      //     <Text style={styles.cardTitle}> {item.coinName} </Text>
      //     <Text style={styles.cardsubtitle}> {item.risk} </Text>
      //     <TouchableOpacity style={styles.cardButtonStyle}>
      //       <Text style={styles.cardButtonText}>Entry {item.entry} </Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity
      //       style={[
      //         styles.cardButtonStyle,
      //         {
      //           backgroundColor: colors.lightRed,
      //           marginTop: moderateVerticalScale(4),
      //         },
      //       ]}>
      //       <Text style={[styles.cardButtonText]}>Stop {item.stop}</Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>

      //parseInt(layoutHeight) + parseInt(layoutHeight)
      // moderateVerticalScale(320)
      <View
        style={{
          height: showDetail
            ? lineNo === getLineNumber(index)
              ? finalHeight
              : null
            : null,
          width: '33%',
        }}>
        <View
          onLayout={event => {
            var {x, y, width, height} = event.nativeEvent.layout;
            setLayOutWidth(width);
            setLayOutHeight(height);
          }}
          style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => handleDetail(index)}
            style={[
              styles.cardContainer,
              {
                borderWidth: isSelected ? 2 : 0,
                borderColor: isSelected ? colors.yellow : null,
              },
            ]}>
            <View style={styles.cardContent}>
              <Text style={styles.cardTimestyle} numberOfLines={1}>
                {item.time}
              </Text>
              <FastImage source={item.img} style={styles.cardImageStyle} />
              <Text style={styles.cardTitle} numberOfLines={1}>
                {item.coinName}
              </Text>
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
          </TouchableOpacity>
        </View>

        {isSelected && (
          <View
            style={{
              backgroundColor: colors.theme,
              // paddingHorizontal: moderateScale(),
              // padding: 16,
              zIndex: 1,
              width: '300%',
              // marginStart:
              //   positionIndex == 2
              //     ? -layoutWidth * 2.1
              //     : positionIndex == 1
              //     ? -layoutWidth
              //     : null, // use for 2 index
              position: 'absolute', // Use absolute positioning
              left:
                positionIndex == 2
                  ? -layoutWidth * 2
                  : positionIndex == 1
                  ? -layoutWidth
                  : 0,
              bottom: 0,
            }}>
            <View style={{flex: 1}}>
              {clickedCardIndex === index ? (
                <HandleDetail index={index} />
              ) : null}
            </View>
            {/* {clickedCardIndex === index ? <HandleDetail /> : null} */}
          </View>
        )}
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
    margin: 4,
    // width: '30%',
    // flex: 1,
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
  cardDetails: {
    backgroundColor: 'lightgray',
    width: '100%',
    padding: 16,
    // position: 'absolute',
    // bottom: 0,
    // flex: 1,
    // overflow: 'hidden',
  },

  // below code for detail card

  detailContainer: {
    paddingHorizontal: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 2,
    // borderColor: colors.borderColor,
    paddingVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: colors.white,
    marginBottom: moderateVerticalScale(4),
    elevation: 4,
    // width: '100%',
  },
  detailHeading: {
    fontSize: scale(12),
    color: colors.gray,
    fontWeight: '500',
  },
  detailGreenTextStyle: {
    fontSize: scale(12),
    color: colors.lightGreen,
    fontWeight: '700',
  },
  deatilCopyBtnStyle: {
    borderWidth: 1,
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
  itemDetailContainer: {
    paddingHorizontal: moderateScale(10),
    marginVertical: moderateVerticalScale(14),
    marginHorizontal: moderateScale(10),
    borderWidth: 2,
    borderColor: colors.borderColor,
    borderRadius: moderateScale(14),
    paddingVertical: moderateVerticalScale(16),
  },
  itemDetailHeadingStyle: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '600',
    marginLeft: moderateScale(14),
  },
  itemPriceText: {
    fontSize: scale(14),
    color: colors.black,
    fontWeight: '500',
    paddingVertical: moderateVerticalScale(8),
  },
});

export default SignalCards;
