import { StyleSheet } from 'react-native';
import Colors from '../../Themes/Colors';
import { Font, FontSize } from '../../Themes/Fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginBottom: 16,
    marginHorizontal: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginVertical: 8,
    shadowColor: Colors.shadowColor,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fill: {
    flex: 1,
  },
  transparentContainer: {
    borderRadius: 10,
  },
  searchCardMargin: {
    marginTop: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: -10,
    flex: 1,
    backgroundColor: Colors.imageBackground,
    shadowColor: Colors.shadowColor,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: Colors.primaryText,
    fontFamily: Font.bold,
    fontSize: FontSize.large,
  },
  description: {
    paddingTop: 5,
    color: Colors.secondaryText,
    fontFamily: Font.semiBold,
    fontSize: FontSize.average,
  },
  companyText: {
    color: Colors.secondaryText,
    fontFamily: Font.regular,
    fontSize: FontSize.small,
    lineHeight: 20,
  },
  details: {
    flex: 4,
    marginLeft: 15,
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  imagePlaceholder: {
    color: Colors.primaryText,
    fontFamily: Font.bold,
    fontSize: FontSize.largest,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
