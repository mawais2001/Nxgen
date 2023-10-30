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

function CompoundCalculator(props) {
  const [depositValue, setDepositValue] = useState('');
  const [contributionValue, setContributionValue] = useState('');
  const [selected, setSelected] = useState('Monthly');

  const handleMonthsModal = () => {
    Alert.alert('Months');
  };

  const handleYearsModal = () => {
    Alert.alert('Years');
  };
  const handleShowModal = () => {
    if (selected === 'Monthly') {
      handleMonthsModal();
    } else if (selected === 'Yearly') {
      handleYearsModal();
    } else {
      null;
    }
  };

  return (
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
        <Text style={styles.headingStyle}>Rate %:</Text>
      </View>
      <View>
        <Text>Slider</Text>
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
      <AllCompo.TextInputCompo
        placeholder=""
        inputStyle={{
          backgroundColor: colors.borderColor,
          borderRadius: moderateScale(6),
          height: moderateVerticalScale(46),
        }}
        leftText={selected === 'Monthly' ? '1 Month' : '1 Year'}
        leftTextOnPress={() => handleShowModal()}
        keyboardType="numeric"
        textStyle={{
          fontSize: scale(14),
          color: colors.black,
        }}
        value={contributionValue}
        onChangeText={text => setContributionValue(text)}
      />
      <TouchableOpacity
        style={{alignItems: 'center', marginTop: moderateVerticalScale(16)}}
        activeOpacity={0.8}>
        <Text style={[styles.headingStyle, {fontWeight: '600'}]}>Clear</Text>
      </TouchableOpacity>
      <View
        style={{alignItems: 'center', marginTop: moderateVerticalScale(16)}}>
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
    </View>
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
});

export default CompoundCalculator;
