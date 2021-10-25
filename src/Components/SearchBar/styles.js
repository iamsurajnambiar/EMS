import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import {Font, FontSize} from '../../Themes/Fonts';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: Colors.white,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 12,
    marginVertical: 8,
    shadowColor: Colors.shadowColor,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.textInput,
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 15,
  },
  searchIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.darkBackground,
  },
});
