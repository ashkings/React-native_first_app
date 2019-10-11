import React,{ Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Logo from '../components/logo';
import Form from '../components/forms';

import { Actions } from 'react-native-router-flux'
import Login from './login';

class Signup extends Component{
    goBack(){
        Actions.pop()
    }
  render(){
    return(
      <View style={styles.container}>
          <Logo />
          <Form type='Signup'/>
          <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account yet?</Text>
              <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign In</Text></TouchableOpacity>
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

export default Signup