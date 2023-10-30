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
} from '../../common/CommonImports';
import * as AllCompo from '../../Components/index';
import {useNavigation} from '@react-navigation/native';
import CryptoCategoryData from '../../dummyData/CryptoCategoryData';
function CryptoCategories(props) {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const [selected, setSelected] = useState('Metaverse');

  const data = CryptoCategoryData[selected];
  // const sortedData = data.slice().sort((a, b) => a.rank - b.rank);

  const sortedData = data ? data.slice().sort((a, b) => a.rank - b.rank) : [];

  const Itemlist = [
    'Metagovernance',
    'Metaverse',
    'Metis Ecosystem',
    'MEV Protection',
    'Mid-Cap PFP',
    'Mirrored Assets',
    'Moonbeam Ecosystem',
    'Moonriver Ecosystem',
    'Move to Earn',
    'MultiversX Ecosystem',
    'Music',
    'Near Protocol Ecosystem',
    'NFT',
    'NFT Index',
    'NFT marketplace',
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.mainItemsConatainer} activeOpacity={0.9}>
        <View style={styles.currenyNameContainer}>
          <FastImage
            source={item.img}
            style={styles.imgStyle}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View>
            <Text style={styles.currencyNameTextStyle}>
              {item.currencyName}
            </Text>
            <View style={styles.currenyRankContainer}>
              <View style={styles.currencyRankNoConatiner}>
                <Text style={styles.currencyRankTextStyle}> {item.rank}</Text>
              </View>
              <Text style={styles.currencyRankNameTextStyle}>
                {item.rankName}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.currenyPriceContainer}>
          <Text style={styles.currencyPriceText}>{item.price24h}</Text>
          <View style={styles.currenyImgeContainer}>
            <Image
              source={imagePath.polygon}
              style={styles.polygonIconStyle}
              resizeMode="contain"
            />
            <Text style={styles.currencyPriceText}>{item.pricePercentage}</Text>
          </View>
        </View>

        <View style={styles.marketCapConatainer}>
          <Text style={styles.marketCapText}>{item.marketCap}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: moderateScale(10)}}>
        <AllCompo.HeaderWithSearch
          searchText={searchText}
          setSearchText={setSearchText}
          onPress={() => navigation.goBack()}
          placeholder="Search Here"
          icon={imagePath.back}
          IconContainer={{
            width: moderateScale(30),
            height: moderateScale(30),
            borderRadius: moderateScale(15),
          }}
        />
      </View>
      <AllCompo.ItemListHorizontal
        list={Itemlist}
        selected={selected}
        setSelected={setSelected}
      />
      <View style={{marginTop: moderateVerticalScale(18)}}>
        <View style={styles.lineStyle} />
        <View style={styles.headingItemContainer}>
          <Text
            style={[
              styles.headingItemTextStyle,
              {
                textAlign: 'left',
                flex: 1.2,
              },
            ]}>
            Name
          </Text>
          <Text
            style={[
              styles.headingItemTextStyle,
              {
                textAlign: 'center',
              },
            ]}>
            Price 24h%
          </Text>
          <Text
            style={[
              styles.headingItemTextStyle,
              {
                textAlign: 'right',
              },
            ]}>
            Market Cap
          </Text>
        </View>
        <View style={styles.lineStyle} />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: moderateScale(10),
          marginTop: moderateVerticalScale(12),
        }}>
        <FlatList
          data={sortedData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
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
  lineStyle: {
    height: moderateVerticalScale(2),
    backgroundColor: colors.borderColor,
  },
  headingItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateVerticalScale(8),
  },
  headingItemTextStyle: {
    fontSize: scale(11),
    color: colors.black,
    fontWeight: '400',
    flex: 1,
  },

  // flatlist items style
  mainItemsConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateVerticalScale(14),
    borderRadius: moderateScale(6),
    paddingVertical: moderateVerticalScale(14),
    elevation: 4,
    backgroundColor: colors.white,
  },
  imgStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    marginRight: moderateScale(6),
  },
  polygonIconStyle: {
    width: moderateScale(8),
    height: moderateScale(8),
  },
  currenyNameContainer: {
    flexDirection: 'row',
    flex: 1.2,
    alignItems: 'center',
  },
  currenyRankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(4),
  },
  currenyPriceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  currenyImgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marketCapConatainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  currencyNameTextStyle: {
    fontSize: scale(12),
    color: colors.black,
    fontWeight: '500',
  },
  currencyRankNoConatiner: {
    backgroundColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(4),
    width: moderateScale(20),
    height: moderateScale(20),
  },
  currencyRankTextStyle: {
    fontSize: scale(12),
    color: colors.black,
    fontWeight: '500',
  },
  currencyRankNameTextStyle: {
    fontSize: scale(10),
    color: colors.black,
    fontWeight: '500',
    marginLeft: moderateScale(8),
  },
  currencyPriceText: {
    fontSize: scale(10),
    color: colors.black,
    fontWeight: '500',
  },
  marketCapText: {
    fontSize: scale(12),
    color: colors.black,
    fontWeight: '500',
  },
});

export default CryptoCategories;
