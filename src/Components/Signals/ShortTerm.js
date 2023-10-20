import {
  React,
  View,
  StyleSheet,
  moderateScale,
} from '../../common/CommonImports';
import SignalHeadingCompo from './SignalHeadingCompo';
import SignalCards from './SignalCards';

const ShortTerm = ({shortData, selected}) => {
  return (
    <View style={styles.container}>
      <SignalHeadingCompo title={selected} itemLength={shortData.length} />
      <View style={{flex: 1}}>
        <SignalCards data={shortData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
});

export default ShortTerm;
