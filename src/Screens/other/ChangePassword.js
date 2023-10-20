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
function ChangePassword(props) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AllCompo.HeaderWIthLabel label="Password" />
      <View
        style={{
          alignItems: 'center',
          marginTop: moderateVerticalScale(10),
        }}>
        <Text style={styles.headingStyle}>Create New</Text>
        <Text style={styles.headingStyle}>Password</Text>
      </View>
      <Text style={styles.descStyle}>
        Enter old new password below. Automatically change your password after
        verifing old and new password.
      </Text>
      <AllCompo.HeaderWIthLabel
        label="Old Password"
        style={styles.iconContainer}
        labelStyle={{fontSize: scale(14)}}
        icon={imagePath.password}
        iconStyle={{width: moderateScale(16), height: moderateScale(16)}}
        resizeMode="contain"
        containerStyle={{paddingVertical: moderateVerticalScale(12)}}
      />
      <AllCompo.TextInputCompo
        placeholder="Enter Old Password"
        inputStyle={styles.inputStyle}
      />
      <AllCompo.HeaderWIthLabel
        label="New Password"
        style={styles.iconContainer}
        labelStyle={{fontSize: scale(14)}}
        icon={imagePath.password}
        iconStyle={{width: moderateScale(16), height: moderateScale(16)}}
        resizeMode="contain"
      />
      <AllCompo.TextInputCompo
        placeholder="Enter New Password"
        inputStyle={styles.inputStyle}
      />
      <AllCompo.HeaderWIthLabel
        label="Confirm Password"
        style={styles.iconContainer}
        labelStyle={{fontSize: scale(14)}}
        icon={imagePath.password}
        iconStyle={{width: moderateScale(16), height: moderateScale(16)}}
        resizeMode="contain"
      />
      <AllCompo.TextInputCompo
        placeholder="Enter Confirm Password"
        inputStyle={styles.inputStyle}
      />
      <View style={styles.btnConatiner}>
        <AllCompo.ButtonCompo
          title="Change Password"
          style={{width: '100%'}}
          textStyle={{color: colors.black, fontWeight: '700'}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(20),
  },
  headingStyle: {
    fontSize: scale(28),
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descStyle: {
    fontSize: scale(16),
    color: colors.black,
    fontWeight: '500',
    marginVertical: moderateVerticalScale(16),
  },
  iconContainer: {
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: moderateScale(8),
  },
  inputStyle: {
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateVerticalScale(0),
  },
  btnConatiner: {
    alignItems: 'center',
    marginVertical: moderateVerticalScale(24),
  },
});

export default ChangePassword;
