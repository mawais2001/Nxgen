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
import {useNavigation} from '@react-navigation/native';
import * as AllCompo from '../../Components/index';

function HowToUseApp(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <AllCompo.HeaderWIthLabel
        label="Disclaimer | NXGen Signals"
        containerStyle={{paddingHorizontal: moderateScale(20)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
});

export default HowToUseApp;
