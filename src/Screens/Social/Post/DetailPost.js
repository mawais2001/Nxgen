import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {HeaderWIthLabel} from '../../../Components';
import colors from '../../../styles/colors';
import {moderateScale} from 'react-native-size-matters';

export default function DetailPost(props) {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <HeaderWIthLabel label={''} />
      <Text>This is a DetailPost</Text>
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
