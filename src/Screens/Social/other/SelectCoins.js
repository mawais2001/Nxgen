import {
  React,
  View,
  StyleSheet,
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
  ImageBackground,
  useState,
  FlatList,
} from '../../../common/CommonImports';
import * as AllCompo from '../../../Components/index';

function SelectCoins({setSelected}) {
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);
  const cryptoData = [
    {
      id: 1,
      name: 'Bitcoin',
      icon: imagePath.Bitcoin,
      shortName: 'BTC',
      selected: false,
    },
    {
      id: 2,
      name: 'Ethereum',
      icon: imagePath.Ethereum,
      shortName: 'ETH',
      selected: false,
    },
    {
      id: 3,
      name: 'Tether',
      icon: imagePath.Tether,
      shortName: 'USDT',
      selected: false,
    },
    {
      id: 4,
      name: 'BNB',
      icon: imagePath.BNB,
      shortName: 'BNB',
      selected: false,
    },
    {
      id: 5,
      name: 'USD Coin',
      icon: imagePath.Usdcoin,
      shortName: 'USDC',
      selected: false,
    },
    {
      id: 5,
      name: 'XRP',
      icon: imagePath.XRP,
      shortName: 'XRP',
      selected: false,
    },
    {
      id: 6,
      name: 'Cardano',
      icon: imagePath.Cardano,
      shortName: 'ADA',
      selected: false,
    },
    {
      id: 7,
      name: 'Solana',
      icon: imagePath.Solana,
      shortName: 'SOL',
      selected: false,
    },
  ];

  const toggleSelection = name => {
    setSelectedCurrencies(prevSelected => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter(currency => currency !== name);
      } else {
        return [...prevSelected, name];
      }
    });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.currencyContainerStyle}
        onPress={() => toggleSelection(item.name)}
        activeOpacity={0.6}>
        <View style={styles.currencyIconContainerStyle}>
          <FastImage
            source={item.icon}
            style={styles.currencyIconStyle}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text
            style={
              styles.currencyTextStyle
            }>{`${item.name} (${item.shortName})`}</Text>
        </View>
        <View
          style={{
            paddingHorizontal: moderateScale(8),
            paddingVertical: moderateVerticalScale(4),
          }}>
          <View
            style={[
              styles.currencySelectionContainer,
              {
                backgroundColor: selectedCurrencies.includes(item.name)
                  ? colors.yellow
                  : colors.theme,
                borderColor: selectedCurrencies.includes(item.name)
                  ? colors.yellow
                  : colors.gray,
              },
            ]}>
            {selectedCurrencies.includes(item.name) ? (
              <FastImage
                source={imagePath.check}
                style={{width: moderateScale(12), height: moderateScale(8)}}
                resizeMode={FastImage.resizeMode.contain}
              />
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <AllCompo.HeaderWIthLabel onPress={() => setSelected(false)} />
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
        }}>
        <Text style={styles.headingStyle}>
          Select the coins you’re interested in
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <AllCompo.TextInputCompo
          inputStyle={{
            backgroundColor: colors.searchbox,
            marginVertical: moderateVerticalScale(20),
            borderRadius: moderateScale(24),
          }}
          placeholder="Search Coins"
          leftIcon={imagePath.search}
          textStyle={{color: colors.black}}
        />
      </View>
      <View style={{flex: 1, marginBottom: moderateVerticalScale(10)}}>
        <FlatList
          data={cryptoData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AllCompo.ButtonCompo
          title="Next"
          style={{width: '100%'}}
          textStyle={{color: colors.black, fontSize: scale(14)}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(22),
  },
  headingStyle: {
    fontSize: scale(22),
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
  },
  currencyIconStyle: {
    width: moderateScale(26),
    height: moderateScale(26),
  },
  currencyTextStyle: {
    fontSize: scale(12),
    fontWeight: '500',
    color: colors.black,
    marginLeft: moderateScale(14),
  },
  currencyContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(14),
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    paddingHorizontal: moderateScale(4),
  },
  currencyIconContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySelectionContainer: {
    width: moderateScale(18),
    height: moderateScale(18),
    borderRadius: moderateScale(18 / 2),
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(8),
  },
});

export default SelectCoins;
