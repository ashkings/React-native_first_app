import React,{ Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Logo from '../components/logo';
import Form from '../components/forms';

import { Actions } from 'react-native-router-flux'

class Login extends Component{
    signup(){
        Actions.signup()
    }
  render(){
    return(
      <View style={styles.container}>
          <Logo />
          <Form type='Login'/>
          <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't you have an account yet?</Text>
              <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
          </View>
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
  },
  signupTextCont:{
    justifyContent: "center",
    alignItems: "flex-end",
    flexGrow: 1,
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText:{
      color: 'rgba(255,255,255,0.6)',
      fontSize: 12
  },
  signupButton:{
      color: '#ffffff',
      fontSize: 12,
      fontWeight: '500'
  }
});

export default Login