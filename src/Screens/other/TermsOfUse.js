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
  FlatList,
} from '../../common/CommonImports';
import * as AllCompo from '../../Components/index';
import ArticlesData from '../../dummyData/ArticlesData';

function TermsOfUse(props) {
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: moderateScale(20)}}>
        <AllCompo.HeaderWIthLabel label="Terms Of Use" />
      </View>
      <ScrollView
        style={{flex: 1, paddingHorizontal: moderateScale(20)}}
        showsVerticalScrollIndicator={false}>
        <Text>{ArticlesData.oneArticle.description}</Text>
        <Text>{ArticlesData.oneArticle.description}</Text>
        <Text>{ArticlesData.oneArticle.description}</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <AllCompo.ButtonCompo
          title="Accept"
          style={{width: '100%'}}
          textStyle={styles.buttonTextStyle}
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
  buttonContainer: {
    height: '14%',
    backgroundColor: colors.theme,
    borderTopWidth: 2,
    borderColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  buttonTextStyle: {
    color: colors.black,
    fontWeight: '700',
    fontSize: scale(16),
    textTransform: 'uppercase',
  },
});

export default TermsOfUse;
