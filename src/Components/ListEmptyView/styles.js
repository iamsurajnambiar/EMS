import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import {Font, FontSize} from '../../Themes/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultTitle: {
    fontFamily: Font.bold,
    color: Colors.nameColor,
    fontSize: FontSize.normal,
    marginVertical: 10,
  },
  defaultSubTitle: {
    fontFamily: Font.medium,
    color: Colors.pickerLabel,
    fontSize: FontSize.small,
  },
});
