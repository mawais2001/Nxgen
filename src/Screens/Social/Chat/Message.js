import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {HeaderWIthLabel, TwoHoriItemsSelector} from '../../../Components';
import colors from '../../../styles/colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

export default function Message(props) {
  const [selected, setSelected] = useState('Inbox');
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <HeaderWIthLabel label={'Inbox'} />
      <View
        style={{
          marginTop: moderateVerticalScale(16),
          paddingHorizontal: moderateScale(14),
        }}>
        <TwoHoriItemsSelector
          firstItem={'Inbox'}
          secondItem={'Requests'}
          selected={selected}
          setSelected={setSelected}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(16),
  },
});
