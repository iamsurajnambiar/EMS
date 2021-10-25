import {StyleSheet, Dimensions , StatusBar} from 'react-native';
import Colors from '../../Themes/Colors';
import {Font, FontSize} from '../../Themes/Fonts';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Colors.white,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 5 / 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nameView: {
    position: 'absolute',
    bottom: -20,
    left: 10,
    right: 10,
    zIndex: 5,
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  nameText: {
    color: Colors.primaryText,
    fontFamily: Font.bold,
    fontSize: FontSize.veryLarge,
  },
  contentContainer: {
    borderTopRightRadius: 10,
    marginTop: 25,
    //paddingHorizontal: 20,
  },
  centerLayout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    paddingVertical: 5,
    color: Colors.primaryText,
    fontFamily: Font.regular,
    fontSize: FontSize.normal,
  },
  splitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rowLabel: {
    paddingVertical: 5,
    color: Colors.secondaryText,
    fontFamily: Font.regular,
    fontSize: FontSize.normal,
  },
  rowValueText: {
    color: Colors.primaryText,
    fontFamily: Font.bold,
    fontSize: FontSize.large,
  },
  alignTextRight:{
    textAlign: 'right',
  },
  verticalSeparator: {
    height: '80%',
    width: StyleSheet.hairlineWidth,
    backgroundColor: Colors.secondaryText,
  },
  horizontalSeparator: {
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: Colors.secondaryText,
  },
  fillAreaLeft: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: 5,
  },
  fillAreaRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 5,
  },
  contentCell: {
    paddingHorizontal: 20,
  },
  linkText: {
    color: Colors.blue,
    fontFamily: Font.bold,
    fontSize: FontSize.large,
  },
});
