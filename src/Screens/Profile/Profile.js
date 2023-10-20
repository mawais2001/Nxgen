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
} from '../../common/CommonImports';

function Profile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeaderStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FastImage
            source={imagePath.avatar}
            style={styles.profileImageStyle}
          />
          <View style={{marginLeft: moderateScale(18)}}>
            <Text>Awais Yaseen</Text>
            <Text>Unlock all Permium Features</Text>
            <TouchableOpacity>
              <Text>Try 7 Days Free</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Text>setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },
  profileImageStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  profileHeaderStyle: {
    paddingVertical: moderateVerticalScale(28),
    paddingHorizontal: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Profile;
