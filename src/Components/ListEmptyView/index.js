// @flow
import React from 'react';
import {Text, View} from 'react-native';
import {NO_DATA_IMAGE} from '../../Assets/SVG/noData';
import {SvgImage} from '../../Themes/SVGImage';
import {styles} from './styles';

type Props = {
  icon: IconsType,
  title?: string,
  subTitle?: string,
  iconSize: {
    height: number,
    width: number,
  },
  titleStyle?: any,
};

const ListEmptyComponent = ({
  icon = NO_DATA_IMAGE,
  iconSize,
  title = '',
  subTitle = '',
}: Props) => (
  <View style={styles.container}>
    <SvgImage icon={icon} height={iconSize.height} width={iconSize.width} />
    <Text style={[styles.defaultTitle]}>{title}</Text>
    <Text style={[styles.defaultSubTitle]}>{subTitle}</Text>
  </View>
);

ListEmptyComponent.defaultProps = {
  iconSize: {
    height: 200,
    width: 200,
  },
  title: '',
  subTitle: '',
  titleStyle: {},
};

export default ListEmptyComponent;
