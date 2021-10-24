/**
 * EMS APP
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StatusBar } from 'react-native';
 //import 'react-native-gesture-handler';
 import AppContainer from './src/Navigators';
 import Colors from './src/Themes/Colors';
 
 const App: () => React$Node = () => {
   return (
     <>
       <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
       <AppContainer />
     </>
   );
 };
 
 export default App;