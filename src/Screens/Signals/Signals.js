import HeaderCompo from '../../Components/HeaderCompo';
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
} from '../../common/CommonImports';
import TrackedData from '../../dummyData/TrackedData';
import * as AllCompo from '../../Components/index';
import SignalData from '../../dummyData/SignalData';

function Signals(props) {
  const [selected, setSelected] = useState('Tracked');
  const [searchText, setSearchText] = useState('');
  const trackData = TrackedData.Tracked;
  const shortTermData = SignalData.ShortTerm;
  const longTermData = SignalData.LongTerm;
  const archivedData = SignalData.Archived;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} barStyle={'light-content'} />
      <HeaderCompo searchText={searchText} setSearchText={setSearchText} />
      <AllCompo.ItemListHorizontal
        list={['Tracked', 'Short Term', 'Long Term', 'Archived']}
        selected={selected}
        setSelected={setSelected}
        myStyle={{
          marginRight: moderateScale(2),
          paddingHorizontal: moderateScale(10),
        }}
      />
      <View style={{flex: 1, marginBottom: moderateVerticalScale(20)}}>
        {selected === 'Tracked' ? (
          <AllCompo.TrackedCoins trackData={trackData} selected={selected} />
        ) : null}
        {selected === 'Short Term' ? (
          <AllCompo.ShortTerm shortData={shortTermData} selected={selected} />
        ) : null}
        {selected === 'Long Term' ? (
          <AllCompo.LongTerm data={longTermData} selected={selected} />
        ) : null}
        {selected === 'Archived' ? (
          <AllCompo.LongTerm data={archivedData} selected={selected} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  trackedContainer: {
    flex: 1,
  },
  trackedHeaderStyle: {
    paddingVertical: moderateVerticalScale(18),
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateVerticalScale(22),
  },
  headingText: {
    fontSize: scale(18),
    color: colors.black,
    fontWeight: '500',
  },
});

export default Signals;
