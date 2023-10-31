import {
  React,
  View,
  useState,
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
  SafeAreaView,
} from '../../common/CommonImports';

import * as AllCompo from '../../Components/index';

function EditProfile(props) {
  const [selectName, setSelectName] = useState(false);
  const [selectPhone, setSelectPhone] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <AllCompo.HeaderWIthLabel label="Change Profile" />
        <ScrollView
          style={{paddingVertical: moderateVerticalScale(30)}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.profileMainContainer}>
            <FastImage
              source={imagePath.avatar}
              style={styles.profileImageStyle}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.profileTextStyle}>Change Profile Photo</Text>
          </View>
          <View style={styles.secondContainer}>
            <AllCompo.ListHorizont
              title="Full Name"
              icon={imagePath.call}
              iconRight={selectName ? imagePath.down : imagePath.forward}
              textRight="Jhon Dao"
              onPress={() => setSelectName(!selectName)}
            />
            {selectName ? (
              <AllCompo.TextInputCompo
                placeholder="John Dao"
                inputStyle={styles.inputTextStyle}
                textStyle={{color: colors.black}}
              />
            ) : null}
            <AllCompo.ListHorizont
              title="Phone Number"
              icon={imagePath.user2}
              iconRight={selectPhone ? imagePath.down : imagePath.forward}
              textRight="+1 8988860 199"
              onPress={() => setSelectPhone(!selectPhone)}
            />
            {selectPhone ? (
              <AllCompo.TextInputCompo
                placeholder="+1 8988860 199"
                inputStyle={styles.inputTextStyle}
                textStyle={{color: colors.black}}
              />
            ) : null}
          </View>
        </ScrollView>
        <View
          style={{
            marginVertical: moderateVerticalScale(14),
            alignItems: 'center',
          }}>
          <AllCompo.ButtonCompo
            title="Save Changes"
            style={{width: '100%'}}
            textStyle={{
              color: colors.black,
              fontWeight: '700',
              fontSize: scale(14),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(20),
  },
  profileImageStyle: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
  },
  profileTextStyle: {
    fontSize: scale(15),
    fontWeight: '500',
    color: colors.black,
    marginLeft: moderateScale(14),
  },
  profileMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingVertical: moderateVerticalScale(32),
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    paddingHorizontal: moderateScale(10),
  },
  secondContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    marginTop: moderateVerticalScale(32),
  },
  inputTextStyle: {
    backgroundColor: colors.theme,
    borderBottomWidth: 2,
    borderBottomColor: colors.borderColor,
    marginBottom: moderateVerticalScale(26),
  },
});

export default EditProfile;
