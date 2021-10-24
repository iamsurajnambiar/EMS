import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

type Props = {
  title: string,
  image: string,
  onSelect: Function,
  isSearchEnabled: boolean,
};

const ListItemCard = ({id, image, title, onSelect, isSearchEnabled}: Props) => {
  const renderProfileImage = () => {
    if (image) {
      return (
        <View style={styles.imageContainer}>
          <FastImage style={styles.image} source={{uri: image || ''}} />
        </View>
      );
    }
    return (
      <View style={[styles.imageContainer, styles.center]}>
        <Text style={styles.imagePlaceholder}>{title?.charAt(0) || ''}</Text>
      </View>
    );
  };

  return (
    <View style={styles.transparentContainer}>
      <Pressable
        style={[styles.container, isSearchEnabled && styles.searchCardMargin]}
        onPress={onSelect}>
        <View style={styles.fill}>{renderProfileImage()}</View>
        <View style={styles.details}>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
          </View>
          <Text style={styles.companyText} numberOfLines={1}>
            {'Romaguera-Jacobson'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ListItemCard;
