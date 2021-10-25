import React from 'react';
import {SvgXml} from 'react-native-svg';

export const SvgImage = (props: Props) => {
  const {icon, width = 25, height = 25} = props;
  return <SvgXml xml={icon} width={width} height={height} />;
};
