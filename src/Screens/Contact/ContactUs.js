import {ButtonCompo, HeaderWIthLabel} from '../../Components';
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
  TouchableOpacity,
  Image,
  imagePath,
  Text,
  ScrollView,
  FastImage,
} from '../../common/CommonImports';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ContactList from '../../Components/Contact/ContactList';

function ContactUs(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderWIthLabel
        style={{
          width: moderateScale(34),
          height: moderateScale(34),
          borderRadius: moderateScale(34 / 2),
        }}
        iconSize={24}
      />
      <View style={{alignItems: 'center', paddingHorizontal: moderateScale(8)}}>
        <FastImage
          source={imagePath.contactus}
          style={styles.imageStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.headingText}>Contact Us</Text>
        <ContactList
          title="Twitter"
          desc="Follow us on"
          icon={imagePath.twitter}
        />
        <ContactList
          title="Telegram"
          desc="Chat with us on"
          icon={imagePath.telegram}
        />
        <ContactList title="Gmail" desc="Email us" icon={imagePath.gmail} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
    paddingHorizontal: moderateScale(20),
  },
  headerIconContainer: {
    width: moderateScale(34),
    height: moderateScale(34),
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(34 / 2),
  },
  imageStyle: {
    width: moderateScale(160),
    height: moderateScale(160),
    borderRadius: moderateScale(160 / 2),
  },
  headingText: {
    fontSize: scale(18),
    color: colors.black,
    fontWeight: '600',
    marginVertical: moderateVerticalScale(20),
  },
});

export default ContactUs;
