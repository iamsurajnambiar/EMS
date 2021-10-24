import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {styles} from './styles';
import {Strings} from '../../Utilities/strings';
import Images from '../../Themes/Images';

const SearchBar = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image source={Images.main.searchIcon} style={styles.searchIcon} />
      <TextInput
        placeholder={Strings.search}
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

export default SearchBar;
