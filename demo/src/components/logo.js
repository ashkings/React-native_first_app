import React,{ Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';


class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("/home/ashu/Desktop/react-native/demo/src/images/logo.png")}
                style = {{width: 50, height: 50}} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container : {
      backgroundColor: "#455a64",
      alignItems: "center",
      justifyContent: "flex-end",
      flexGrow: 1
    }
  });

export default Logo;