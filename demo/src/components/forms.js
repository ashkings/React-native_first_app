import React,{ Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';


class Form extends Component{
    render(){
        return(
            <View style={styles.MainContainer}>
                <TextInput placeholder = "Enter Email" style={styles.inputbox} 
                underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#ffffff'
                selectionColor='#fff' keyboardType='email-address'
                onSubmitEditing={()=> this.password.focus()}/>
                <TextInput placeholder = "Enter Password" style={styles.inputbox} secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)' placeholderTextColor='#ffffff'
                ref={(input) => this.password = input}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create(
    {
      MainContainer:
      {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
      },

      inputbox:
      {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        textAlign:'center',
        paddingHorizontal: 10,
        borderRadius: 25,
        marginVertical: 10,
        color: '#ffffff',
        fontSize: 16
      },
      button:{
          width: 300,
          backgroundColor: '#1c313a',
          borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 16
      },
      buttonText:{
          fontSize: 16,
          fontWeight: '500',
          color: '#ffffff',
          textAlign: 'center'
      }
    });

export default Form;