import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {HeaderWIthLabel} from '../../../Components';
import colors from '../../../styles/colors';
import {moderateScale} from 'react-native-size-matters';

export default function Notification(props) {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <HeaderWIthLabel label={'Notification'} />
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
