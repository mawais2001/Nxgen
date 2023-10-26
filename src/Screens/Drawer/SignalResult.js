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
  useState,
  TextInput,
} from '../../common/CommonImports';
import {useNavigation} from '@react-navigation/native';
import * as AllCompo from '../../Components/index';
import SignalResultCard from '../../Components/Navigation/Drawer/SignalResultCard';
import ResultPerformance from '../../Components/Navigation/Drawer/ResultPerformance';
import TrackedData from '../../dummyData/TrackedData';
function SignalResult(props) {
  const [selected, setSelected] = useState('Weekly');
  const trackData = TrackedData.Tracked;
  return (
    <View style={styles.container}>
      <AllCompo.HeaderWIthLabel
        label="Results"
        labelStyle={{fontSize: scale(13)}}
        style={{
          width: moderateScale(20),
          height: moderateScale(20),
          borderRadius: moderateScale(10),
        }}
        iconSize={12}
      />
      <View
        style={{alignItems: 'center', marginBottom: moderateVerticalScale(10)}}>
        <AllCompo.ItemListHorizontal
          list={['Weekly', 'Monthly', 'Yearly']}
          selected={selected}
          setSelected={setSelected}
          myStyle={{
            paddingHorizontal: moderateScale(24),
          }}
          style={{width: '100%'}}
        />
      </View>
      <SignalResultCard />
      <View style={{marginVertical: moderateVerticalScale(6)}} />
      <ResultPerformance selected={selected} trackData={trackData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(20),
  },
});

export default SignalResult;
