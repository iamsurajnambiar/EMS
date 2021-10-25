import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Images from '../../Themes/Images';
import {OpenURL} from '../../Utilities/helpers';
import {styles} from './styles';
import { useHeaderHeight } from '@react-navigation/elements';

const DetailsScreen = ({route}) => {
  const {data} = route.params;
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  return (
    <ScrollView
      style={[styles.container, {paddingBottom: Math.max(insets.bottom, 16), marginTop: headerHeight}]}>
      <View style={[styles.imageContainer]}>
        <FastImage style={styles.image} source={data.profile_image != '' ? {uri:data.profile_image} : Images.main.avatar} />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{data.name}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentCell}>
          <Text style={styles.rowLabel}>{'username'}</Text>
          <Text style={styles.rowValueText}>{data.username}</Text>
        </View>
        <View style={styles.horizontalSeparator} />

        <View style={styles.contentCell}>
          <Text style={styles.rowLabel}>{'email'}</Text>
          <Text style={styles.rowValueText}>{data.email}</Text>
        </View>
        <View style={styles.horizontalSeparator} />

        <View style={styles.contentCell}>
          <Text style={styles.rowLabel}>{'address'}</Text>
          <Text style={styles.rowValueText}>
            {data.address ? data.address : '-'}
          </Text>
        </View>
        <View style={styles.horizontalSeparator} />

        <View style={styles.contentCell}>
          <Text style={styles.rowLabel}>{'phone'}</Text>
          <Text style={styles.rowValueText}>{data.phone ? data.phone : '-'}</Text>
        </View>
        <View style={styles.horizontalSeparator} />

        <View style={styles.contentCell}>
          <Text style={styles.rowLabel}>{'company details'}</Text>
          <Text style={styles.rowValueText}>{data.company}</Text>
        </View>
        <View style={styles.horizontalSeparator} />

        <Pressable
          onPress={() => OpenURL('https://www.' + data.website)}
          style={styles.contentCell}>
          <Text style={styles.rowLabel}>
            Website: <Text style={styles.linkText}>{data.website}</Text>
          </Text>
        </Pressable>

        <View style={styles.horizontalSeparator} />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
