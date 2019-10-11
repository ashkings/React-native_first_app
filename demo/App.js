/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{ Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Login from './src/pages/login';
import Signup from './src/pages/signup';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="#1a313a" barStyle="light-content" />
        <Login />
        <Signup />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#455a64",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

export default App