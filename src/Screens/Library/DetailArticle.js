import {ButtonCompo, HeaderWIthLabel} from '../../Components';
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
} from '../../common/CommonImports';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

function DetailArticle(props) {
  const {data} = props.route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderWIthLabel />
      <View style={styles.descriptionContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.descriptionTextStyle}> {data.description} </Text>
          <Text style={styles.descriptionTextStyle}> {data.description} </Text>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: moderateVerticalScale(12),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <ButtonCompo
          title="Close"
          style={{backgroundColor: colors.gray, width: '48%'}}
          textStyle={{textTransform: 'uppercase'}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{marginHorizontal: moderateScale(6)}} />
        <ButtonCompo
          title="Share Article"
          style={{width: '48%'}}
          textStyle={{textTransform: 'uppercase'}}
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
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(10),
  },
  descriptionTextStyle: {
    fontSize: scale(16),
    color: colors.black,
    fontWeight: '400',
    textAlign: 'justify',
  },
});

export default DetailArticle;
