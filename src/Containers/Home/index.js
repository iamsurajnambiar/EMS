import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ListEmptyComponent from '../../Components/ListEmptyView';
import ListItemCard from '../../Components/ListItemCard';
import SearchBar from '../../Components/SearchBar';
import {fetchEmployeeList} from '../../Services/apiManager';
import {
  getAllEmployee,
  searchEmployeeQuery,
  syncEmployeeList,
} from '../../Storage/databaseService';
import Colors from '../../Themes/Colors';
import {ScreenNames} from '../../Utilities/constants';
import {Strings} from '../../Utilities/strings';
import {styles} from './styles';

const initialState = {
  data: [],
  loading: true,
  error: false,
};

const HomeScreen = ({navigation}) => {
  const [state, setState] = useState(initialState);
  const [searchText, setSearchText] = useState('');
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (searchText) {
      invokeEmployeeSearch(searchText);
    } else {
      invokeGetEmployeeList();
    }
  }, [searchText]);

  const invokeEmployeeSearch = async queryString => {
    try {
      const searchResult = await searchEmployeeQuery(queryString);
      setState(prevState => ({
        ...prevState,
        data: searchResult,
        loading: false,
        error: false,
      }));
    } catch (error) {}
  };

  const invokeGetEmployeeList = useCallback(async () => {
    const data = await getAllEmployee();
    if (data?.length > 0) {
      setState(prevState => ({
        ...prevState,
        data: data,
        loading: false,
        error: false,
      }));
    } else {
      invokeFetchEmployeeList();
    }
  }, []);

  const invokeFetchEmployeeList = async () => {
    console.warn('Employeee Api Calling');
    const response = await fetchEmployeeList();
    console.log('response', response);
    if (response) {
      setState(prevState => ({
        ...prevState,
        data: response,
        loading: false,
        error: false,
      }));
      syncEmployeeList(response);
    } else {
      setState(prevState => ({
        ...prevState,
        loading: false,
        error: true,
      }));
    }
  };

  const onNavigation = selectedCatData => {
    navigation.navigate(ScreenNames.detailsScreen, {
      data: selectedCatData,
      formSearch: searchText === '' ? false : true,
    });
  };

  const onChangeText = text => {
    setSearchText(text);
  };

  const handleRefresh = () => {
    console.log('LIST REFRES');
    invokeFetchEmployeeList();
  };

  // UI
  const renderItem = ({item}) => (
    <ListItemCard
      id={item.id}
      title={item.name}
      image={item.profile_image || ''}
      isSearchEnabled={searchText === '' ? false : true}
      onSelect={() => onNavigation(item)}
    />
  );

  const renderListEmpty = () => {
    if (!state.loading && state.data.length === 0) {
      return (
        <View style={styles.noDataView}>
          <ListEmptyComponent title={Strings.noDataAvailable} />
        </View>
      );
    }
    return null;
  };

  const renderPagingFooter = () => {
    if (state.loading) {
      return <ActivityIndicator size="large" color={Colors.primary} />;
    }
    return null;
  };

  return (
    <View
      style={[styles.container, {paddingBottom: Math.max(insets.bottom, 16)}]}>
      <SearchBar value={searchText} onChangeText={onChangeText} />
      <FlatList
        data={state.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(item.id) + String(index)}
        showsVerticalScrollIndicator={false}
        onRefresh={handleRefresh}
        refreshing={false}
        ListEmptyComponent={renderListEmpty}
        ListFooterComponent={renderPagingFooter}
      />
    </View>
  );
};

export default HomeScreen;
