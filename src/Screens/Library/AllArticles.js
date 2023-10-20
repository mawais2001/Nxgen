import {ButtonCompo, TextInputCompo, HeaderWIthLabel} from '../../Components';
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
  TouchableOpacity,
  Image,
  imagePath,
  Text,
  ScrollView,
  FlatList,
  TextInput,
  FastImage,
} from '../../common/CommonImports';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../Navigation/navigationStrings';

function AllArticles(props) {
  const {data} = props.route.params;
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{flex: 0.6}}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate(navigationStrings.DetailArticle, {
                data: item,
              });
            }}>
            <Text numberOfLines={3} style={styles.cardHeadingText}>
              {item.title}
            </Text>
            <Text style={styles.cardTimeText}> {item.time} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 0.4, alignItems: 'flex-end'}}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate(navigationStrings.DetailArticle, {
                data: item,
              });
            }}>
            <FastImage
              source={{uri: item.img, priority: FastImage.priority.normal}}
              style={styles.cardImageStyle}
              resizeMode={FastImage.resizeMode.cover}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderWIthLabel label="Articles" />

      <View>
        <TextInputCompo
          leftIcon={imagePath.search}
          inputStyle={{
            backgroundColor: colors.theme,
            borderWidth: 1,
            borderColor: colors.gray,
            borderRadius: moderateScale(26),
          }}
          placeholder="Search here"
        />
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={data}
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
    paddingHorizontal: moderateScale(20),
  },
  cardContainer: {
    marginBottom: moderateVerticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingBottom: moderateVerticalScale(14),
  },
  cardImageStyle: {
    width: moderateScale(120),
    height: moderateScale(100),
    borderRadius: moderateScale(14),
  },
  cardHeadingText: {
    fontSize: scale(18),
    color: colors.black,
    fontWeight: '500',
  },
  cardTimeText: {
    fontSize: scale(12),
    color: colors.gray,
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
});

export default AllArticles;
