import {SafeAreaView} from 'react-native';
import {
  React,
  View,
  useState,
  StyleSheet,
  Text,
  scale,
  moderateScale,
  moderateVerticalScale,
  TouchableOpacity,
  StatusBar,
  colors,
  ScrollView,
} from '../../common/CommonImports';
import * as AllCompo from '../../Components/index';
import {useNavigation} from '@react-navigation/native';
function Library(props) {
  const [selected, setSelected] = useState('Academy');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <AllCompo.LibraryHeader
          title="Your Crypto Library"
          onPress={() => navigation.openDrawer()}
        />
        <View style={{marginVertical: moderateVerticalScale(6)}} />
        {/* <AllCompo.ItemListHorizontal
        list={['Academy', 'Videos']}
        selected={selected}
        setSelected={setSelected}
        myStyle={{
          paddingHorizontal: moderateScale(40),
          flex: 1,
        }}
      /> */}

        <View style={{paddingHorizontal: moderateScale(20)}}>
          <AllCompo.TwoHoriItemsSelector
            firstItem={'Academy'}
            secondItem={'Videos'}
            selected={selected}
            setSelected={setSelected}
          />
        </View>

        {selected === 'Academy' ? <AllCompo.Academy {...props} /> : null}
        {selected === 'Videos' ? <AllCompo.Videos /> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  btnTextStyle: {
    fontSize: scale(12),
    fontWeight: '700',
    color: colors.black,
    textTransform: 'uppercase',
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: colors.yellow,
    width: '50%',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(20),
  },
  headingStyle: {
    fontSize: scale(40),
    fontWeight: '700',
    color: colors.black,
  },
  descriptionStyle: {
    fontSize: scale(14),
    fontWeight: '500',
    color: colors.gray,
    textAlign: 'justify',
    marginVertical: moderateVerticalScale(12),
  },
});

export default Library;
