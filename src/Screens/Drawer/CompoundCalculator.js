import {Keyboard, SafeAreaView} from 'react-native';
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
} from '../../common/CommonImports';
import * as AllCompo from '../../Components/index';
import {useNavigation} from '@react-navigation/native';
import Slider from '@react-native-community/slider';

function CompoundCalculator(props) {
  const [depositValue, setDepositValue] = useState('');
  const [contributionValue, setContributionValue] = useState('');
  const [selected, setSelected] = useState('Monthly');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleClearValues = () => {
    setDepositValue('');
    setContributionValue('');
    Keyboard.dismiss();
  };

  const months = [
    '1 Month',
    '2 Months',
    '3 Months',
    '4 Months',
    '5 Months',
    '6 Months',
    '7 Months',
    '8 Months',
    '9 Months',
    '10 Months',
    '11 Months',
    '12 Months',
  ];
  const years = [
    '1 Year',
    '2 Years',
    '3 Years',
    '4 Years',
    '5 Years',
    '6 Years',
    '7 Years',
    '8 Years',
    '9 Years',
    '10 Years',
    '11 Years',
    '12 Years',
  ];

  const handleShowModal = () => {
    setModalVisible(!isModalVisible);
    Keyboard.dismiss();
  };
  const handleSetDate = (item, index) => {
    if (selected === 'Monthly') {
      setSelectedMonth(index);
      setSelectedYear(0);
      setModalVisible(!isModalVisible);
    } else if (selected === 'Yearly') {
      setSelectedYear(index);
      setSelectedMonth(0);
      setModalVisible(!isModalVisible);
    } else {
      null;
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          elevation: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            paddingHorizontal: moderateScale(12),
            paddingVertical: moderateVerticalScale(6),
            borderBottomWidth: 2,
            borderBottomColor: colors.borderColor,
          }}
          activeOpacity={0.5}
          onPress={() => handleSetDate(item, index)}>
          <Text
            style={{
              fontSize: scale(12),
              color: colors.black,
              fontWeight: '400',
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ValueLabel = ({value}) => (
    <View
      style={[
        styles.labelContainer,
        {
          left: sliderValue * 3.5,
        },
      ]}>
      <Text style={styles.labelText}>{value}</Text>
    </View>
  );

  const onValueChange = value => {
    setSliderValue(value);
  };

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const onSlidingComplete = () => {
    setTooltipVisible(false);
  };

  // const hideTooltip = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.setNativeProps({tooltipVisible: false});
  //   }
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <AllCompo.HeaderWIthLabel
          label="Compound Calculator"
          labelStyle={{marginLeft: moderateScale(40)}}
        />
        <View style={{marginBottom: moderateVerticalScale(10)}}>
          <Text style={styles.headingStyle}>Initial Deposit</Text>
        </View>
        <AllCompo.TextInputCompo
          placeholder=""
          inputStyle={{
            backgroundColor: colors.borderColor,
            borderRadius: moderateScale(6),
            height: moderateVerticalScale(46),
          }}
          leftIcon={imagePath.dollar}
          keyboardType="numeric"
          textStyle={{
            fontSize: scale(14),
            color: colors.black,
          }}
          value={depositValue}
          onChangeText={text => setDepositValue(text)}
        />

        <AllCompo.TwoHoriItemsSelector
          firstItem={'Monthly'}
          secondItem={'Yearly'}
          selected={selected}
          setSelected={setSelected}
          onPress={() => Alert.alert('ha')}
        />

        <View
          style={{
            marginBottom: moderateVerticalScale(10),
            marginTop: moderateVerticalScale(18),
          }}>
          <Text style={styles.headingStyle}>Contribution</Text>
        </View>
        <AllCompo.TextInputCompo
          placeholder=""
          inputStyle={{
            backgroundColor: colors.borderColor,
            borderRadius: moderateScale(6),
            height: moderateVerticalScale(46),
          }}
          leftIcon={imagePath.dollar}
          keyboardType="numeric"
          textStyle={{
            fontSize: scale(14),
            color: colors.black,
          }}
          value={contributionValue}
          onChangeText={text => setContributionValue(text)}
        />
        <View
          style={{
            marginBottom: moderateVerticalScale(10),
            //   marginTop: moderateVerticalScale(18),
          }}>
          <Text style={styles.headingStyle}>Rate % {sliderValue} :</Text>
        </View>

        <View style={{paddingVertical: moderateVerticalScale(4)}}>
          {tooltipVisible && <ValueLabel value={sliderValue} />}
          {/* <ValueLabel value={sliderValue} /> */}
          <Slider
            minimumValue={0}
            maximumValue={100}
            thumbTintColor={colors.yellow}
            minimumTrackTintColor={colors.yellow}
            maximumTrackTintColor={colors.gray}
            step={1}
            value={sliderValue}
            onValueChange={onValueChange}
            onTouchStart={showTooltip}
            onTouchEnd={hideTooltip}
            // onSlidingComplete={onSlidingComplete}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: moderateScale(10),
            }}>
            <Text style={styles.headingStyle}>0</Text>
            <Text style={styles.headingStyle}>100</Text>
          </View>
        </View>

        <View
          style={{
            marginBottom: moderateVerticalScale(10),
            marginTop: moderateVerticalScale(18),
          }}>
          <Text style={styles.headingStyle}>
            {selected === 'Monthly' ? 'Months' : 'Years'}
          </Text>
        </View>

        <View style={styles.showDateModalContainer}>
          <TouchableOpacity
            style={styles.showModalDateTextContainer}
            activeOpacity={0.6}
            onPress={() => handleShowModal()}>
            <Text style={styles.showDateModalTextStyle}>
              {selected === 'Monthly'
                ? months[selectedMonth]
                : years[selectedYear]}
            </Text>
            <Image
              source={isModalVisible ? imagePath.up : imagePath.down}
              style={styles.showDatemodalIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {isModalVisible ? (
          <View style={{flex: 1}}>
            <FlatList
              data={selected === 'Monthly' ? months : years}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: moderateVerticalScale(16),
              }}
              activeOpacity={0.7}
              onPress={handleClearValues}>
              <Text style={[styles.headingStyle, {fontWeight: '600'}]}>
                Clear
              </Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                marginTop: moderateVerticalScale(16),
              }}>
              <AllCompo.ButtonCompo
                title="Calculate"
                style={{width: '100%'}}
                textStyle={{
                  fontWeight: '600',
                  fontSize: scale(14),
                  color: colors.theme,
                }}
              />
            </View>
          </>
        )}

        {isModalVisible ? (
          <View style={{height: moderateVerticalScale(22)}} />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(14),
  },
  headingStyle: {
    fontSize: scale(14),
    fontWeight: '400',
    color: colors.black,
  },
  showDatemodalIcon: {
    width: moderateScale(14),
    height: moderateScale(14),
    tintColor: colors.theme,
  },
  showDateModalContainer: {
    backgroundColor: colors.borderColor,
    borderRadius: moderateScale(6),
    height: moderateVerticalScale(46),
    marginTop: moderateVerticalScale(4),
  },
  showModalDateTextContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(14),
  },
  showDateModalTextStyle: {
    fontSize: scale(12),
    fontWeight: '400',
    color: colors.black,
  },
  labelContainer: {
    position: 'absolute',
    top: -33, // Adjust the top value to position the label above the slider
    // alignSelf: 'center',
    backgroundColor: colors.yellow,
    paddingHorizontal: moderateScale(6),
    paddingVertical: moderateVerticalScale(4),
    borderRadius: moderateScale(8),
    // borderWidth: 1,
    // borderColor: colors,
  },
  labelText: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: colors.theme,
  },
});

export default CompoundCalculator;
