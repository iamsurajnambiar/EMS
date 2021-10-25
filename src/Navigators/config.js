import Colors from "../Themes/Colors";
import { Font, FontSize } from "../Themes/Fonts";

export const navigationConfig = {
  headerStyle: {
    backgroundColor: Colors.white,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerTitleStyle: {
    color: Colors.primaryText,
    fontFamily: Font.bold,
    fontSize: FontSize.veryLarge,
  },
};