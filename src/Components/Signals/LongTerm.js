import {
  React,
  View,
  StyleSheet,
  moderateScale,
} from '../../common/CommonImports';
import SignalHeadingCompo from './SignalHeadingCompo';
import SignalCards from './SignalCards';

const LongTerm = ({data, selected}) => {
  return (
    <View style={styles.container}>
      <SignalHeadingCompo title={selected} itemLength={data.length} />
      <View style={{flex: 1}}>
        <SignalCards data={data} />
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

export default LongTerm;
