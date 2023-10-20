import {
  React,
  View,
  useState,
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
  FlatList,
} from '../../common/CommonImports';
import HeaderCompo from '../../Components/HeaderCompo';
import ItemListHorizontal from '../../Components/ItemListHorizontal';
import CryptoData from '../../dummyData/CryptoData';
import {useNavigation} from '@react-navigation/native';

function Insingts(props) {
  const [selected, setSelected] = useState('All');
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.cardContainer} activeOpacity={0.5}>
        <View style={styles.cardContent}>
          <Text style={{fontSize: scale(12), color: colors.gray}}>
            {selected}
          </Text>
          <Text
            style={{
              fontSize: scale(12),
              color: colors.gray,
              marginLeft: moderateScale(10),
            }}>
            {item.time}
          </Text>
        </View>
        <View style={{marginTop: moderateVerticalScale(4)}}>
          <Text
            style={{
              fontSize: scale(13),
              color: colors.black,
              fontWeight: '400',
              // textAlign: 'left',
            }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <HeaderCompo
        onPress={() => navigation.navigate('Setting')}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {/* <View style={styles.mainContainer}>
        <ScrollView
          style={styles.scrollerConatianer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Ethereum</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Ripple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Dpgecoin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Binance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Cardano</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Polkadot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Solana</Text>
          </TouchableOpacity>
        </ScrollView>
      </View> */}

      <ItemListHorizontal
        list={[
          'All',
          'Ethereum',
          'Ripple',
          'Dogecoin',
          'Binance',
          'Cardano',
          'Polkadot',
          'Solana',
        ]}
        selected={selected}
        setSelected={setSelected}
      />
      <View
        style={{
          flex: 1,
          marginTop: moderateVerticalScale(24),
          marginBottom: moderateVerticalScale(30),
        }}>
        <FlatList
          data={CryptoData[selected]}
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
  mainContainer: {
    backgroundColor: colors.itemSelectorbg,
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(30),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    // flexDirection: 'row',
    height: moderateScale(50),
    // justifyContent: 'space-between',
  },
  itemContainer: {
    backgroundColor: colors.white,
    marginRight: moderateScale(8),
    paddingHorizontal: moderateScale(14),
    // paddingVertical: moderateScale(8),
    height: moderateScale(30),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
  },
  scrollerConatianer: {
    flexDirection: 'row',
  },
  itemText: {
    fontSize: scale(12),
    color: colors.gray,
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(12),
    marginHorizontal: moderateScale(20),
    shadowColor: colors.black,
    paddingTop: moderateVerticalScale(6),
    elevation: 10,
    marginBottom: moderateScale(12),
    borderRadius: moderateScale(6),
    paddingBottom: moderateVerticalScale(28),
    alignItems: 'flex-start',
  },
});

export default Insingts;
